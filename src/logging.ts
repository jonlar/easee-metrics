import { createLogger, format, transports } from 'winston';

const printf = format.printf(({ level, message, task, timestamp }) => {
  return `${timestamp} [${task}] ${level}: ${message}`;
});

export default createLogger({
  level: process.env.LOG_LEVEL ?? 'info',
  format: format.combine(format.timestamp(), format.errors({ stack: true }), printf),
  defaultMeta: { service: 'easee' },
  transports: [new transports.Console()],
});

export type { Logger } from 'winston';
