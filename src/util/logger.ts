import winston from "winston";

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug"
    }),
    new winston.transports.File({ filename: "logs/debug.log", level: "debug" })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${info.timestamp}:[${info.level}]: ${info.message}`;
    })
  )
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== "production") {
  logger.debug("Logging initialized at debug level");
}

export default logger;

/**
 * Log some messages
 * logger.silly('Trace message, Winston!');
 * logger.debug('Debug message, Winston!');
 * logger.verbose('A bit more info, Winston!');
 * logger.info('Hello, Winston!');
 * logger.warn('Heads up, Winston!');
 * logger.error('Danger, Winston!');
 *
 */