import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [BbbModule.register({}), CccModule.register({ aaa: 1, bbb: 'bbb' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
