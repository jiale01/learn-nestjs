"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const winston_module_1 = require("./winston/winston.module");
const winston_1 = require("winston");
const chalk = require("chalk");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            winston_module_1.WinstonModule.forRoot({
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
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map