import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserStudentDocument } from './user-student.schema';

@Controller()
export class StudentController {
  constructor(
    @InjectModel('users')
    private readonly userStudentModel: Model<UserStudentDocument>,
  ) {}

  //   this just return magically with no error
  @Post('profile')
  async signUp(@Body() data) {
    return await this.userStudentModel.findOneAndUpdate(
      { email: data.email },
      {
        profile: {
          name: data.name,
        },
      },
    );
  }
}
