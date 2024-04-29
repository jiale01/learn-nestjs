import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class MyValidationPipe implements PipeTransform<any> {
    private options;
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
}
