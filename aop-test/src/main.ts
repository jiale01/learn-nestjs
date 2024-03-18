import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { TimeInterceptor } from './time.interceptor';
// import { LoginGuard } from './login.guard';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before', req.url);
    next();
    console.log('after');
  });
  // app.useGlobalGuards(new LoginGuard());
  app.useGlobalInterceptors(new TimeInterceptor());
  await app.listen(3000);
}
bootstrap();
