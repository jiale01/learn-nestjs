"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
const chalk = require("chalk");
const dayjs = require("dayjs");
const winston_1 = require("winston");
class MyLogger {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            transports: [
                new winston_1.transports.Console({
                    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(({ context, level, message, time }) => {
                        const appStr = chalk.green(`[NEST]`);
                        const contextStr = chalk.yellow(`[${context}]`);
                        return `${appStr} ${time} ${level} ${contextStr} ${message} `;
                    })),
                }),
                new winston_1.transports.File({
                    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
                    filename: '111.log',
                    dirname: 'log',
                }),
            ],
        });
    }
    log(message, context) {
        const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.logger.log('info', message, { context, time });
    }
    error(message, context) {
        const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.logger.log('info', message, { context, time });
    }
    warn(message, context) {
        const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        this.logger.log('info', message, { context, time });
    }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=MyLogger.js.map