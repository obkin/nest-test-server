import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/create-user.dto';
import { LoggerService } from 'src/logger/logger.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/register')
  async createNewUser(@Body() userDto: UserCreateDto) {
    try {
      return await this.usersService.createNewUser(userDto);
    } catch (e) {
      //
    }
  }
}
