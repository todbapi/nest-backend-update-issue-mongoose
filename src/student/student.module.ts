import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { UserStudentSchema } from './user-student.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'users', schema: UserStudentSchema }],
      'MainDatabaseConnection',
    ),
  ],
  controllers: [StudentController],
})
export class StudentModule {}
