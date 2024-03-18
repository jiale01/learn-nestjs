import { Injectable, Inject } from '@nestjs/common';
import { OtherService } from './other/other.service';
@Injectable()
export class AppService {
  @Inject(OtherService)
  private ohterService: OtherService;

  getHello(): string {
    return 'Hello World!' + this.ohterService.xxx();
  }
}
