/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFiles(files: Array<Express.Multer.File>, body: {
        name: string;
    }): void;
    merge(name: string): void;
}
