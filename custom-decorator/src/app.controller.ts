import { Controller, Get, UseGuards, SetMetadata, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyQuery, MyHeaders } from './ddd.decorator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello4')
  getHello4(@Ccc() c): string {
    return c;
  }

  @Get('hello6')
  getHello6(@Query('aaa') aaa, @MyQuery('bbb') bbb, @MyHeaders('host') ccc) {
    console.log('aaa', aaa);
    console.log('bbb', bbb);
    console.log('ccc', ccc);
  }
}
