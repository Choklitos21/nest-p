import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader, ApiTags } from "@nestjs/swagger";

@ApiTags('home')
@ApiHeader({
  name: 'Home',
  description: 'Just to say Hello World',
})
@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
