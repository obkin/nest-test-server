import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { UsersRepository } from './users.repository';
import { UserCreateDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createNewUser(dto: UserCreateDto) {
    try {
      return await this.usersRepository.createNewUser(dto);
    } catch (e) {
      this.loggerService.error(`[UsersService] error: ${e.message}`);
    }
  }
}
