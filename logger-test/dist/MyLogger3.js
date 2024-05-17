"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger3 = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let MyLogger3 = class MyLogger3 extends common_2.ConsoleLogger {
    log(message, context) {
        console.log(this.appService.getHello());
        console.log(`[${context}]`, message);
        console.log('--------------');
    }
};
exports.MyLogger3 = MyLogger3;
__decorate([
    (0, common_1.Inject)(app_service_1.AppService),
    __metadata("design:type", app_service_1.AppService)
], MyLogger3.prototype, "appService", void 0);
exports.MyLogger3 = MyLogger3 = __decorate([
    (0, common_2.Injectable)()
], MyLogger3);
//# sourceMappingURL=MyLogger3.js.map