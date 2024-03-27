import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { LoggerService } from 'src/logger/logger.service';
import { UsersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, LoggerService],
  imports: [SequelizeModule.forFeature([UserModel])],
})
export class UsersModule {}
