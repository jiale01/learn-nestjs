import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HelloFilter implements ExceptionFilter {
    private readonly service;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
