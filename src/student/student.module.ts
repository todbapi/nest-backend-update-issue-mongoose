import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.schema';
import { StudentController } from './student.controller';
import { UserStudentSchema, UserStudent } from './user-student.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'users',
          schema: UserSchema,
          discriminators: [
            { name: UserStudent.name, schema: UserStudentSchema },
          ],
        },
      ],
      'MainDatabaseConnection',
    ),
  ],
  // providers: [{provide: getModelToken('userStudent'), useFactory: (userStudent)},]
  controllers: [StudentController],
})
export class StudentModule {}
