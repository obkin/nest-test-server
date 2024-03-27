import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { UserCreateDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(UserModel) private usersRepository: typeof UserModel,
  ) {}

  createNewUser(dto: UserCreateDto) {
    try {
      this.usersRepository.create(dto);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  getAllUsers() {
    try {
      //
    } catch (e) {
      //
    }
  }
}
