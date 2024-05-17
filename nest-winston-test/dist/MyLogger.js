"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
const winston_1 = require("winston");
class MyLogger {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
            transports: [new winston_1.transports.Console()],
        });
    }
    log(message, context) {
        this.logger.log('info', `[${context}] ${message}`);
    }
    error(message, context) {
        this.logger.log('error', `[${context}] ${message}`);
    }
    warn(message, context) {
        this.logger.log('warn', `[${context}] ${message}`);
    }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=MyLogger.js.map