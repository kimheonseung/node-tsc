import winston, { Logger } from 'winston';

const logger: Logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
})