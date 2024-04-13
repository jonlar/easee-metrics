import { HubConnectionBuilder } from '@microsoft/signalr';
import { z } from 'zod';
import { Observable, Subscriber } from 'rxjs';
import { env } from 'process';

import { DatatypesStreamData, EqualizerStreamData } from './signalr-types';

import logger from './logging';

const log = logger.child({ task: 'signalr' });

const dataSchema = z.object({
  mid: z.string(),
  dataType: z.nativeEnum(DatatypesStreamData),
  id: z.nativeEnum(EqualizerStreamData),
  value: z.string(),
  timestamp: z.string(),
});
export type dataType = z.infer<typeof dataSchema>;

export const EaseeStream = (accessTokenFactory: () => string | Promise<string>) =>
  new Observable<dataType>((subscriber: Subscriber<dataType>) => {
    const connection = new HubConnectionBuilder()
      .withUrl('https://streams.easee.com/hubs/chargers', { accessTokenFactory })
      .withStatefulReconnect()
      .build();

    connection.on('ProductUpdate', data => {
      const parsed = dataSchema.safeParse(data);
      if (parsed.success) {
        log.debug(JSON.stringify({ id: EqualizerStreamData[parsed.data.id], value: parsed.data.value }));
        subscriber.next(parsed.data);
      }
    });

    connection.onreconnecting((error?: Error) => {
      throw new Error(`Connection reconnecting - ${error}`);
    });

    connection.onclose((error?: Error) => {
      throw new Error(`Connection closed - ${error}`);
    });

    connection.start().then(() => {
      connection
        .send('SubscribeWithCurrentState', env.EASEE_EQUALIZER, true)
        .then(() => {
          log.info('Connected');
        })
        .catch(() => {
          log.error('Error connecting');
        });
    });
  });
