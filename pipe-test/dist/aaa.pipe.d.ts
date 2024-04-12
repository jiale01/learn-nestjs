import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class AaaPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): string;
}
