import { AppService } from './app.service';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class TapTestInterceptor implements NestInterceptor {
    private appService;
    constructor(appService: AppService);
    private readonly logger;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
