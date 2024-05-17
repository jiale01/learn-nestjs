/*
 * @Author: zhangxin
 * @Date: 2024-05-09 22:04:20
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-05-16 01:05:50
 * @Description: Description
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
