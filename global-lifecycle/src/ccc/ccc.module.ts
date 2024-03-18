import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';
@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly moduleRef: ModuleRef) {}
  onModuleInit() {
    console.log('ccc onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('ccc onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('ccc module onModuleDestroy');
  }

  beforeApplicationShutdown(signal: string) {
    console.log('ccc module beforeApplicationShutdown', signal);
  }

  onApplicationShutdown() {
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('--------------------------', cccService.findAll());
    console.log('ccc module onApplicationShutdown');
  }
}
