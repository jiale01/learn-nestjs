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
exports.AaaDto = void 0;
const class_validator_1 = require("class-validator");
class AaaDto {
}
exports.AaaDto = AaaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'aaa 不能为空' }),
    (0, class_validator_1.IsEmail)({}, { message: 'aaa 不是邮箱格式' }),
    __metadata("design:type", String)
], AaaDto.prototype, "aaa", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'bbb 不是数字' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'bbb 不能为空' }),
    __metadata("design:type", Number)
], AaaDto.prototype, "bbb", void 0);
//# sourceMappingURL=aaa.dto.js.map