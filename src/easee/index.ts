import { Duration } from 'ts-duration';
import { api as easeeApi } from './api';
import logger from '../logging';

const log = logger.child({ task: 'auth' });
interface EaseeProps {
  userName: string | undefined;
  password: string | undefined;
}

export class Easee {
  private userId: number | undefined;
  private credentials: EaseeProps;
  private refreshTimer: NodeJS.Timeout | undefined;
  private token: string | undefined;

  constructor(props: EaseeProps) {
    if (!props.userName || !props.password) throw Error('Set EASEE_USERNAME and EASEE_PASSWORD');
    this.credentials = props;
  }

  private async updateToken(token?: string) {
    this.token = token;
    const baerer = `Bearer ${token}`;
    log.debug(baerer);
    if (token) {
      easeeApi.axios.defaults.headers.common = {
        Authorization: baerer,
      };
    } else {
      delete easeeApi.axios.defaults.headers.common.Authorization;
    }
  }

  private async handleRefresh(options: { refreshToken: string; expiresIn?: Duration }) {
    const refreshAt = options.expiresIn ? options.expiresIn.sub(Duration.second(60)) : undefined;
    if (!refreshAt) {
      log.error('Cannot schedule session refresh, expiry time not set');
      return;
    }

    this.refreshTimer = setTimeout(async () => {
      if (!this.token) {
        log.error('Cannot refresh session, no token set');
        this.logout();
        await this.login();
        return;
      }

      const data = await easeeApi.postApiaccountsrefresh_token({
        accessToken: this.token,
        refreshToken: options.refreshToken,
      });

      if (!data.accessToken) {
        log.error('Session refresh failed');
        this.logout();
        await this.login();
        return;
      }
      this.updateToken(data.accessToken);
      log.info(`Session refreshed, expires in ´${data.expiresIn} seconds`);

      if (data.refreshToken && data.expiresIn) {
        await this.handleRefresh({
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn ? Duration.second(data.expiresIn) : undefined,
        });
      }
    }, refreshAt.milliseconds);
  }

  async login() {
    const data = await easeeApi.postApiaccountslogin(this.credentials);
    if (!data.accessToken) {
      throw new Error('Login failed');
    }
    this.updateToken(data.accessToken ?? undefined);
    if (data.refreshToken && data.expiresIn) {
      await this.handleRefresh({
        refreshToken: data.refreshToken,
        expiresIn: Duration.second(data.expiresIn),
      });
    }

    const profileInfo = await easeeApi.getApiaccountsprofile();
    this.userId = profileInfo.userId;

    log.info(`Logged in as user id ${this.userId}`);
  }

  logout() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
    this.token = undefined;
    log.info('Logged out');
  }

  async showInfo() {
    const profileInfo = await easeeApi.getApiaccountsprofile();
    log.info(profileInfo);
  }

  accessToken = () => {
    if (!this.token) throw new Error('Not logged in');
    return this.token;
  };
}
