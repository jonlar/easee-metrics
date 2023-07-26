import { HubConnectionBuilder } from '@microsoft/signalr';
import { z } from 'zod';
import { Observable, Subscriber } from 'rxjs';
import { env } from 'process';

import { DatatypesStreamData, EqualizerStreamData } from './signalr-types';

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
      .withAutomaticReconnect()
      .build();

    connection.on('ProductUpdate', data => {
      const parsed = dataSchema.safeParse(data);
      if (parsed.success) {
        // console.log(JSON.stringify({ id: EqualizerStreamData[parsed.data.id], value: parsed.data.value }));
        subscriber.next(parsed.data);
      }
    });

    connection.start().then(() => {
      connection
        .send('SubscribeWithCurrentState', env.EASEE_EQUALIZER, true)
        .then(() => {
          console.log('Connected');
        })
        .catch(() => {
          console.log('Error connecting');
        });
    });
  });
