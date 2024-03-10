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
  private token: string | null;

  constructor(props: EaseeProps) {
    if (!props.userName || !props.password) throw Error('Set EASEE_USERNAME and EASEE_PASSWORD');
    this.credentials = props;
    this.token = null;
  }

  async _handleCredentials(accessToken: string | null, refreshToken: string | null, expiresIn: Duration | null) {
    if (!accessToken || !refreshToken || !expiresIn) {
      throw new Error('Failed to login');
    }

    this.token = accessToken;
    easeeApi.axios.defaults.headers.common = {
      Authorization: `Bearer ${accessToken}`,
    };

    const refreshAt = expiresIn.sub(Duration.second(60));
    this.refreshTimer = setTimeout(async () => {
      const data = await easeeApi.postApiaccountsrefresh_token({
        accessToken,
        refreshToken,
      });

      this._handleCredentials(
        data.accessToken ?? null,
        data.refreshToken ?? null,
        data.expiresIn ? Duration.second(data.expiresIn) : null,
      );
    }, refreshAt.milliseconds);

    log.info(`Session refreshed, expires in ´${expiresIn}`);
  }

  async login() {
    const data = await easeeApi.postApiaccountslogin(this.credentials);
    this._handleCredentials(
      data.accessToken ?? null,
      data.refreshToken ?? null,
      data.expiresIn ? Duration.second(data.expiresIn) : null,
    );

    const profileInfo = await easeeApi.getApiaccountsprofile();
    this.userId = profileInfo.userId;

    log.info(`Logged in as user id ${this.userId}`);
  }

  logout() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
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
