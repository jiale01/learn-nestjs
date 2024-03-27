import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  @UseInterceptors(MapTestInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseInterceptors(MapTestInterceptor)
  aaa(): string {
    return this.appService.getHello();
  }
}
