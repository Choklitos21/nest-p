import { Body, Controller, Get } from "@nestjs/common";
import { AppService } from "../app.service";

@Controller('pet')
export class PetController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getNissan(@Body() body) {
    return body
  }

  @Get('getInfoApi')
  async getPets() {
    return this.appService.getInfoPets()
  }

}
