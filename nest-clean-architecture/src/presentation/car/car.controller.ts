import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarController {
  constructor() {}

  @Get()
  async getCars() {
    return 'cars';
  }
}
