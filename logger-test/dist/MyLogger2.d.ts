import { ConsoleLogger } from '@nestjs/common';
export declare class MyLogger extends ConsoleLogger {
    log(message: string, context: string): void;
}
