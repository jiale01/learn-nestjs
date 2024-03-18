import { Controller, Get, Ip, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
    return ip;
  }

  @Get('/session')
  session(@Session() session: any) {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    console.log(session);
    return session.count;
  }
}
