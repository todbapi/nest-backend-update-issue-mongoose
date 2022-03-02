import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';

@Controller()
export class UserController {
  constructor(
    @InjectModel('users')
    private readonly userModel: Model<UserDocument>,
  ) {}

  @Post('signup')
  async signUp(@Body() user) {
    return await new this.userModel({
      email: user.email,
    }).save();
  }
}
