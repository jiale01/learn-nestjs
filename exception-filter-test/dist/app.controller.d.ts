import { AppService } from './app.service';
import { AaaDto } from './aaa.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    aaa(aaaDto: AaaDto): string;
}
