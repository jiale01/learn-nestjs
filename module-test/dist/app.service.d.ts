import { CccService } from './ccc.service';
import { DddService } from './ddd.service';
export declare class AppService {
    private cccService;
    private dddService;
    constructor(cccService: CccService, dddService: DddService);
    getHello(): string;
}
