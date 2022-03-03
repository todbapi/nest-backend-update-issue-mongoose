import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';
import { Student, StudentSchema } from './student.schema';

export type UserStudentDocument = UserStudent & Document;

@Schema()
export class UserStudent {
  email: string;
  // @Prop({ type: StudentSchema })
  // profile: Student;

  // this is temporarily added to check it works or not
  @Prop()
  profile: string;
}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);
