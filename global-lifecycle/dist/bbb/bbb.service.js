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
exports.BbbService = void 0;
const common_1 = require("@nestjs/common");
const aaa_service_1 = require("../aaa/aaa.service");
let BbbService = class BbbService {
    constructor(aaaService) {
        this.aaaService = aaaService;
    }
    create(createBbbDto) {
        return 'This action adds a new bbb';
    }
    findAll() {
        return `This action returns all bbb` + this.aaaService.findAll();
    }
    findOne(id) {
        return `This action returns a #${id} bbb`;
    }
    update(id, updateBbbDto) {
        return `This action updates a #${id} bbb`;
    }
    remove(id) {
        return `This action removes a #${id} bbb`;
    }
};
exports.BbbService = BbbService;
exports.BbbService = BbbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aaa_service_1.AaaService])
], BbbService);
//# sourceMappingURL=bbb.service.js.map