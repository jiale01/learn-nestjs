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
exports.CccController = void 0;
const common_1 = require("@nestjs/common");
const ccc_service_1 = require("./ccc.service");
const create_ccc_dto_1 = require("./dto/create-ccc.dto");
const update_ccc_dto_1 = require("./dto/update-ccc.dto");
let CccController = class CccController {
    constructor(cccService) {
        this.cccService = cccService;
    }
    onModuleInit() {
        console.log('ccc onModuleInit');
    }
    onApplicationBootstrap() {
        console.log('ccc onApplicationBootstrap');
    }
    onModuleDestroy() {
        console.log('ccc contraller onModuleDestroy');
    }
    beforeApplicationShutdown() {
        console.log('ccc contraller beforeApplicationShutdown');
    }
    onApplicationShutdown() {
        console.log('ccc contraller onApplicationShutdown');
    }
    create(createCccDto) {
        return this.cccService.create(createCccDto);
    }
    findAll() {
        return this.cccService.findAll();
    }
    findOne(id) {
        return this.cccService.findOne(+id);
    }
    update(id, updateCccDto) {
        return this.cccService.update(+id, updateCccDto);
    }
    remove(id) {
        return this.cccService.remove(+id);
    }
};
exports.CccController = CccController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ccc_dto_1.CreateCccDto]),
    __metadata("design:returntype", void 0)
], CccController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CccController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CccController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ccc_dto_1.UpdateCccDto]),
    __metadata("design:returntype", void 0)
], CccController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CccController.prototype, "remove", null);
exports.CccController = CccController = __decorate([
    (0, common_1.Controller)('ccc'),
    __metadata("design:paramtypes", [ccc_service_1.CccService])
], CccController);
//# sourceMappingURL=ccc.controller.js.map