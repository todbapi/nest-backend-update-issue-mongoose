import { Body, Controller, Post } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserStudentDocument } from './user-student.schema';

@Controller()
export class StudentController {
  constructor(
    @InjectModel('userStudent')
    private readonly userStudentModel: Model<UserStudentDocument>,
  ) {}

  //   this just return magically with no error
  @Post('profile')
  async signUp(@Body() data) {
    const info = await this.userStudentModel.findOneAndUpdate(
      { email: data.email },
      { profile: data.name },
    );
    console.log('hello');
    return info;

    // return await this.userStudentModel.findOneAndUpdate(
    //   { email: data.email },
    //   {
    //     profile: {
    //       name: data.name,
    //     },
    //   },
    // );
  }
}
