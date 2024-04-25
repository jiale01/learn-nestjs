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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const aaa_pipe_1 = require("./aaa.pipe");
const validation_pipe_1 = require("./validation/validation.pipe");
const app_dto_1 = require("./app.dto");
var Ggg;
(function (Ggg) {
    Ggg["AAA"] = "111";
    Ggg["BBB"] = "222";
    Ggg["CCC"] = "333";
})(Ggg || (Ggg = {}));
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(aa) {
        return aa;
    }
    getHello2(bb) {
        return bb;
    }
    getHello3(cc) {
        return cc + 1;
    }
    getHello4(dd) {
        return typeof dd;
    }
    getHello5(ee) {
        return ee.reduce((acc, cur) => acc + cur, 0);
    }
    getHello6(ff) {
        return ff;
    }
    getHello7(e) {
        return e;
    }
    getHello8(uuid) {
        return uuid;
    }
    getHello9(kkk) {
        return kkk;
    }
    getHello10(aaa, bbb) {
        return aaa + bbb;
    }
    getHello11(obj) {
        console.log(obj);
        return obj;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('aa'),
    __param(0, (0, common_1.Query)('aa', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('bb'),
    __param(0, (0, common_1.Query)('bb', new common_1.ParseIntPipe({
        exceptionFactory: (msg) => {
            throw new common_1.HttpException('xxx' + msg, common_1.HttpStatus.NOT_IMPLEMENTED);
        },
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello2", null);
__decorate([
    (0, common_1.Get)('cc'),
    __param(0, (0, common_1.Query)('cc', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello3", null);
__decorate([
    (0, common_1.Get)('dd'),
    __param(0, (0, common_1.Query)('dd', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello4", null);
__decorate([
    (0, common_1.Get)('ee'),
    __param(0, (0, common_1.Query)('ee', new common_1.ParseArrayPipe({
        items: Number,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello5", null);
__decorate([
    (0, common_1.Get)('ff'),
    __param(0, (0, common_1.Query)('ff', new common_1.ParseArrayPipe({
        separator: '..',
        optional: true,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello6", null);
__decorate([
    (0, common_1.Get)('gg/:enum'),
    __param(0, (0, common_1.Param)('enum', new common_1.ParseEnumPipe(Ggg))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello7", null);
__decorate([
    (0, common_1.Get)('hh/:uuid'),
    __param(0, (0, common_1.Param)('uuid', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello8", null);
__decorate([
    (0, common_1.Get)('kkk'),
    __param(0, (0, common_1.Query)('kkk', new common_1.DefaultValuePipe('aaa'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello9", null);
__decorate([
    (0, common_1.Get)('nnn/:bbb'),
    __param(0, (0, common_1.Query)('aaa', aaa_pipe_1.AaaPipe)),
    __param(1, (0, common_1.Param)('bbb', aaa_pipe_1.AaaPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello10", null);
__decorate([
    (0, common_1.Get)('ooo'),
    __param(0, (0, common_1.Body)(new validation_pipe_1.MyValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.Ooo]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello11", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map