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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const aaa_interceptor_1 = require("./aaa.interceptor");
const map_test_interceptor_1 = require("./map-test.interceptor");
const tap_test_interceptor_1 = require("./tap-test.interceptor");
const catch_error_test_interceptor_1 = require("./catch-error-test.interceptor");
const timeout_interceptor_1 = require("./timeout.interceptor");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    aaa() {
        return this.appService.getHello();
    }
    bbb() {
        return 'bbb';
    }
    ccc() {
        throw new Error('ccc');
        return 'ccc';
    }
    async ddd() {
        await new Promise((resolve) => {
            setTimeout(resolve, 5000);
        });
        return 'ddd';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(aaa_interceptor_1.AaaInterceptor),
    (0, common_1.UseInterceptors)(map_test_interceptor_1.MapTestInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('aaa'),
    (0, common_1.UseInterceptors)(map_test_interceptor_1.MapTestInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "aaa", null);
__decorate([
    (0, common_1.Get)('bbb'),
    (0, common_1.UseInterceptors)(tap_test_interceptor_1.TapTestInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "bbb", null);
__decorate([
    (0, common_1.Get)('ccc'),
    (0, common_1.UseInterceptors)(catch_error_test_interceptor_1.CatchErrorTestInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "ccc", null);
__decorate([
    (0, common_1.Get)('ddd'),
    (0, common_1.UseInterceptors)(timeout_interceptor_1.TimeoutInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "ddd", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map