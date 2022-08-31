import { Body, Controller, Get } from "@nestjs/common";
import { AppService } from "../app.service";
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('pet')
@ApiHeader({
  name: 'Pet',
  description: 'Found pets and categories',
})
@Controller('pet')
export class PetController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getNissan(@Body() body) {
    return body
  }

  @Get('getInfoApi')
  @ApiResponse({ status: 200, description: 'Information found'})
  @ApiResponse({ status: 500, description: 'An error occurred'})
  async getPets() {
    return this.appService.getInfoPets()
  }

}
