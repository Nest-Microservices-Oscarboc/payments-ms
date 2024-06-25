import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  healtCheck() {
    return 'Payments Gateway is up and running!';
  }
}
