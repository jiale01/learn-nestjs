import {
  Controller,
  Get,
  Req,
  Res,
  HostParam,
  Render,
  Next,
  Redirect,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({ path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hellow() {
    return 'hello';
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
    return req.url;
  }

  @Get('ddd')
  ddd(@Res() res: Response) {
    res.end('ddd');
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    next();
    console.log(__dirname);
    return '1111';
  }

  @Get('eee')
  eee2() {
    console.log(__dirname);
    return '111fdsfad1';
  }

  @Get('jump')
  @Redirect('https://www.baidu.com')
  hhh() {
    // return {
    //   url: req.url,
    //   statusCode: 302,
    // };
  }

  @Get('user')
  @Render('user')
  user() {
    return {
      name: '小张',
      age: 18,
    };
  }
}
