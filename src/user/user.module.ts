import { Module } from '@nestjs/common';
import { UserService } from './service/service.service';
import { UserController } from './controller/controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
