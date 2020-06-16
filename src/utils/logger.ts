import  winston from 'winston';
// const winston = require('winston');
 
// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: `../../logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// Logger configuration
const logConfiguration = {
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
};
 
// Create the logger
export const logger = winston.createLogger(logConfiguration);

// export logger;

// module.exports = logger;