import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello/cicd')
  getCICD(): string {
    return this.appService.getCICD();
  }
  @Get('/hello/docker')
  getDocker(): string {
    return this.appService.getDocker();
  }
}
