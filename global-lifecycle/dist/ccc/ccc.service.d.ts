import { OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';
export declare class CccService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
    create(createCccDto: CreateCccDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCccDto: UpdateCccDto): string;
    remove(id: number): string;
}
