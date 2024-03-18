import { OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';
export declare class CccController implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown, BeforeApplicationShutdown, OnModuleDestroy {
    private readonly cccService;
    constructor(cccService: CccService);
    onModuleInit(): void;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    beforeApplicationShutdown(): void;
    onApplicationShutdown(): void;
    create(createCccDto: CreateCccDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCccDto: UpdateCccDto): string;
    remove(id: string): string;
}
