import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { UserCreateDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(UserModel) private usersRepository: typeof UserModel,
  ) {}

  async createNewUser(dto: UserCreateDto) {
    try {
      return await this.usersRepository.create(dto);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getAllUsers() {
    try {
      // return await
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
