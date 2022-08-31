import { Injectable } from "@nestjs/common";
/*import { HttpService } from "@nestjs/axios";*/

import axios from 'axios'

@Injectable()
export class AppService {
  /*constructor(private readonly httpService: HttpService) {
  }*/

  private _pet: []
  private _categories:[]

  getHello(): string {
    return 'Hello World!';
  }

  async getInfoPets() {
    const outputPet = await axios.get('https://bsl1.herokuapp.com/pet')
    this._pet = outputPet.data

    const outputCategory = await axios.get('https://bsl1.herokuapp.com/pet/categories')
    this._categories = outputCategory.data

    return [ this._pet, this._categories ]
  }


}
