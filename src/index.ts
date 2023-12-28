import { Easee } from './easee';
import { EaseeStream } from './signalr';
import { env } from 'process';
import { filter } from 'rxjs';
import { EqualizerStreamData } from './signalr-types';
import { Registry, Gauge } from 'prom-client';
import express, { Request, Response } from 'express';

async function main() {
  const registry = new Registry();

  const e = new Easee({
    userName: env.EASEE_USERNAME,
    password: env.EASEE_PASSWORD,
  });

  await e.login();

  const stream$ = EaseeStream(() => e.accessToken());

  type ValueInfo = { multiplier?: number; metric: Gauge };

  const valuesIdMap = new Map<number, ValueInfo>([
    [
      EqualizerStreamData.state_currentL1,
      { metric: new Gauge({ name: 'easee_current_L1_amperes', help: 'Imported current on L1' }) },
    ],
    [
      EqualizerStreamData.state_currentL2,
      { metric: new Gauge({ name: 'easee_current_L2_amperes', help: 'Imported current on L2' }) },
    ],
    [
      EqualizerStreamData.state_currentL3,
      { metric: new Gauge({ name: 'easee_current_L3_amperes', help: 'Imported current on L3' }) },
    ],
    [
      EqualizerStreamData.state_activePowerImport,
      {
        multiplier: 1000,
        metric: new Gauge({ name: 'easee_active_power_import_watts', help: 'Imported active power' }),
      },
    ],
    [
      EqualizerStreamData.state_cumulativeActivePowerImport,
      {
        metric: new Gauge({
          name: 'easee_cumulative_active_power_import_kilowatts',
          help: 'Cumulative imported active power',
        }),
      },
    ],
  ]);

  valuesIdMap.forEach((value: ValueInfo) => registry.registerMetric(value.metric));

  stream$.pipe(filter(event => valuesIdMap.has(event.id))).subscribe({
    next(event) {
      const value = parseFloat(event.value);
      const info = valuesIdMap.get(event.id);
      info?.metric.set(value * (info.multiplier ?? 1));
    },
  });

  const app = express();
  app.get('/metrics', async (_req: Request, res: Response) => {
    res.set('Content-type', registry.contentType);
    res.send(await registry.metrics());
  });

  const server = app.listen(env.PORT ?? 8080);

  process.on('SIGINT', () => {
    console.log('Caught SIGINT, exiting');
    e.logout();
    server.close();
    process.exit(0);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
