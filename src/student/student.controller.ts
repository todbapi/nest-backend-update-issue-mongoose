import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserStudentDocument, UserStudent } from './user-student.schema';

@Controller()
export class StudentController {
  constructor(
    @InjectModel(UserStudent.name)
    private readonly userStudentModel: Model<UserStudentDocument>,
  ) {}

  //   this just return magically with no error
  @Post('profile')
  async signUp(@Body() data) {
    console.log(data);
    const info = await this.userStudentModel.create({
      email: data.email,
      profile: data.profile,
      docType: UserStudent.name,
    });

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
