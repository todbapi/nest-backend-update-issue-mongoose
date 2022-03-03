import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserStudentDocument } from './user-student.schema';

@Controller()
export class StudentController {
  constructor(
    @InjectModel('userStudent')
    private readonly userStudentModel: Model<UserStudentDocument>,
  ) {}

  @Post('profile')
  async signUp(@Body() data) {
    const infoUser = await this.userStudentModel.find({ email: data.email });

    const infoWithProfile = await this.userStudentModel.findOneAndUpdate(
      { email: data.email },
      { name: data.name },
    );
    console.log(infoUser);
    console.log(infoWithProfile);
    return infoWithProfile;
  }
}
