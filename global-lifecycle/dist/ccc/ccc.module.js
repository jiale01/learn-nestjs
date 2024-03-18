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
exports.CccModule = void 0;
const common_1 = require("@nestjs/common");
const ccc_service_1 = require("./ccc.service");
const ccc_controller_1 = require("./ccc.controller");
const core_1 = require("@nestjs/core");
let CccModule = class CccModule {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    onModuleInit() {
        console.log('ccc onModuleInit');
    }
    onApplicationBootstrap() {
        console.log('ccc onApplicationBootstrap');
    }
    onModuleDestroy() {
        console.log('ccc module onModuleDestroy');
    }
    beforeApplicationShutdown(signal) {
        console.log('ccc module beforeApplicationShutdown', signal);
    }
    onApplicationShutdown() {
        const cccService = this.moduleRef.get(ccc_service_1.CccService);
        console.log('--------------------------', cccService.findAll());
        console.log('ccc module onApplicationShutdown');
    }
};
exports.CccModule = CccModule;
exports.CccModule = CccModule = __decorate([
    (0, common_1.Module)({
        controllers: [ccc_controller_1.CccController],
        providers: [ccc_service_1.CccService],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], CccModule);
//# sourceMappingURL=ccc.module.js.map