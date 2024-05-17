"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
const common_1 = require("@nestjs/common");
class MyLogger extends common_1.ConsoleLogger {
    log(message, context) {
        console.log(`[${context}]`, message);
    }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=MyLogger2.js.map