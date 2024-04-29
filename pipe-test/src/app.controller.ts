import {
  Controller,
  Get,
  Post,
  Query,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseArrayPipe,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  DefaultValuePipe,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';
import { MyValidationPipe } from './validation/validation.pipe';
import { Ooo, Ppp } from './app.dto';
enum Ggg {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aa')
  getHello(@Query('aa', ParseIntPipe) aa: string): string {
    return aa;
  }

  @Get('bb')
  getHello2(
    @Query(
      'bb',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          throw new HttpException('xxx' + msg, HttpStatus.NOT_IMPLEMENTED);
        },
        // errorHttpStatusCode: HttpStatus.NOT_FOUND
      }),
    )
    bb: string,
  ): string {
    return bb;
  }

  @Get('cc')
  getHello3(@Query('cc', ParseFloatPipe) cc: number) {
    return cc + 1;
  }

  @Get('dd')
  getHello4(@Query('dd', ParseBoolPipe) dd: boolean) {
    return typeof dd;
  }

  @Get('ee')
  getHello5(
    @Query(
      'ee',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    ee: number[],
  ) {
    return ee.reduce((acc, cur) => acc + cur, 0);
  }

  @Get('ff')
  getHello6(
    @Query(
      'ff',
      new ParseArrayPipe({
        separator: '..',
        optional: true,
      }),
    )
    ff: string[],
  ) {
    return ff;
  }

  @Get('gg/:enum')
  getHello7(@Param('enum', new ParseEnumPipe(Ggg)) e: Ggg) {
    return e;
  }

  @Get('hh/:uuid')
  getHello8(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return uuid;
  }

  @Get('kkk')
  getHello9(@Query('kkk', new DefaultValuePipe('aaa')) kkk: string) {
    return kkk;
  }

  @Get('nnn/:bbb')
  getHello10(
    @Query('aaa', AaaPipe) aaa: string,
    @Param('bbb', AaaPipe) bbb: number,
  ) {
    return aaa + bbb;
  }

  @Get('ooo')
  getHello11(@Body() obj: Ooo) {
    console.log(obj);
    return obj;
  }

  @Post('ppp')
  ppp(@Body() obj: Ppp) {
    console.log(obj);
  }
}
