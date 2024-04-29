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
exports.Ppp = exports.Ooo = void 0;
const class_validator_1 = require("class-validator");
class Ooo {
}
exports.Ooo = Ooo;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Ooo.prototype, "age", void 0);
class Ppp {
}
exports.Ppp = Ppp;
__decorate([
    (0, class_validator_1.Length)(10, 20, {
        message(arg) {
            console.log('arg', arg);
            return 'xxx';
        },
    }),
    __metadata("design:type", String)
], Ppp.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.Contains)('hello'),
    __metadata("design:type", String)
], Ppp.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10),
    __metadata("design:type", Number)
], Ppp.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Ppp.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsFQDN)(),
    __metadata("design:type", String)
], Ppp.prototype, "site", void 0);
//# sourceMappingURL=app.dto.js.map