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
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    uploadFiles(files, body) {
        console.log('body', body);
        console.log('files', files);
        const fileName = body.name.match(/(.+)\-\d+$/)[1];
        const chunkDir = 'uploads/chunks_' + fileName;
        if (!fs.existsSync(chunkDir)) {
            fs.mkdirSync(chunkDir);
        }
        fs.cpSync(files[0].path, chunkDir + '/' + body.name);
        fs.rmSync(files[0].path);
    }
    merge(name) {
        const chunkDir = 'uploads/chunks_' + name;
        const files = fs.readdirSync(chunkDir);
        let count = 0;
        let startPos = 0;
        files.map((file) => {
            const filePath = chunkDir + '/' + file;
            const stream = fs.createReadStream(filePath);
            stream
                .pipe(fs.createWriteStream('uploads/' + name, {
                start: startPos,
            }))
                .on('finish', () => {
                count++;
                if (count === files.length) {
                    fs.rm(chunkDir, {
                        recursive: true,
                    }, () => { });
                }
            });
            startPos += fs.statSync(filePath).size;
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 20, {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Get)('merge'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "merge", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map