import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'users', schema: UserSchema }],
      'MainDatabaseConnection',
    ),
  ],
  controllers: [UserController],
})
export class UserModule {}
