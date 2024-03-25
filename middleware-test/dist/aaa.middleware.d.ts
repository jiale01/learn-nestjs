import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
export declare class AaaMiddleware implements NestMiddleware {
    private readonly appService;
    constructor(appService: AppService);
    use(req: Request, res: Response, next: () => void): void;
}
