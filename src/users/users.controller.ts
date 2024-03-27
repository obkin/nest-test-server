import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/get-user')
  async getUser() {
    return { id: 1, name: 'Yarok' };
  }
}
