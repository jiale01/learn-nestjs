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
exports.MyValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let MyValidationPipe = class MyValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype) {
            return value;
        }
        console.log(this.options, '11');
        const object = (0, class_transformer_1.plainToInstance)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException('参数验证失败');
        }
        return value;
    }
};
exports.MyValidationPipe = MyValidationPipe;
__decorate([
    (0, common_1.Optional)(),
    (0, common_1.Inject)('validation_options'),
    __metadata("design:type", Object)
], MyValidationPipe.prototype, "options", void 0);
exports.MyValidationPipe = MyValidationPipe = __decorate([
    (0, common_1.Injectable)()
], MyValidationPipe);
//# sourceMappingURL=validation.pipe.js.map