import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHello2(): string;
    getHello3(): string;
    getHello4(c: any): string;
    getHello6(aaa: any, bbb: any, ccc: any): void;
}
