"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ddd = exports.MyQuery = exports.MyHeaders = void 0;
const common_1 = require("@nestjs/common");
exports.MyHeaders = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return key ? request.headers[key.toLowerCase()] : request.headers;
});
exports.MyQuery = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.query[key];
});
const Ddd = () => (0, common_1.Controller)('ddd');
exports.Ddd = Ddd;
//# sourceMappingURL=ddd.decorator.js.map