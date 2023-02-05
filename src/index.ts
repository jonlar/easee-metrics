import { Easee } from './easee';
import { env } from 'process';

async function main() {
  const e = new Easee({
    userName: env.EASEE_USERNAME,
    password: env.EASEE_PASSWORD,
  });

  await e.login();

  process.on('SIGINT', () => {
    console.log('Caught SIGINT, exiting');
    e.logout();
    process.exit(0);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
