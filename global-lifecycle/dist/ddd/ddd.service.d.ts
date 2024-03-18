import { OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';
export declare class DddService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
    create(createDddDto: CreateDddDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDddDto: UpdateDddDto): string;
    remove(id: number): string;
}
