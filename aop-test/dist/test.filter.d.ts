import { ArgumentsHost, ExceptionFilter, BadRequestException } from '@nestjs/common';
export declare class TestFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
