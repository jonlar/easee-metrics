import { Easee } from './easee';
import { EaseeStream } from './signalr';
import { env } from 'process';
import { filter } from 'rxjs';
import { EqualizerStreamData } from './signalr-types';

async function main() {
  const e = new Easee({
    userName: env.EASEE_USERNAME,
    password: env.EASEE_PASSWORD,
  });

  await e.login();

  const stream$ = EaseeStream(() => e.accessToken());

  type ValueInfo = { name: string; unit: string };

  const valuesIdMap = new Map<number, ValueInfo>([
    [EqualizerStreamData.state_currentL1, { name: 'L1', unit: 'A' }],
    [EqualizerStreamData.state_currentL2, { name: 'L2', unit: 'A' }],
    [EqualizerStreamData.state_currentL3, { name: 'L3', unit: 'A' }],
    [EqualizerStreamData.state_activePowerImport, { name: 'ActivePowerImport', unit: 'kW' }],
    [EqualizerStreamData.state_cumulativeActivePowerImport, { name: 'CumulativeActivePowerImport', unit: 'kWh' }],
  ]);

  stream$.pipe(filter(event => valuesIdMap.has(event.id))).subscribe({
    next(event) {
      const value: number = parseFloat(event.value);
      const timestamp: Date = new Date(Date.parse(event.timestamp));
      const info = valuesIdMap.get(event.id);
      console.log(`${timestamp}: ${info?.name} ${value} ${info?.unit}`);
    },
  });

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
