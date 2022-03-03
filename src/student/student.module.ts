import { Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.schema';
import { StudentController } from './student.controller';
import { UserStudentSchema } from './user-student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
        discriminators: [{ name: 'userStudent', schema: UserStudentSchema }],
      },
    ]),
  ],
  // providers: [{provide: getModelToken('userStudent'), useFactory: (userStudent)},]
  controllers: [StudentController],
})
export class StudentModule {}
