"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const MyLogger_1 = require("./MyLogger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(new MyLogger_1.MyLogger());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map