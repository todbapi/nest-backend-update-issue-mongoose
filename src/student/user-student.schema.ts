import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';
import { Student, StudentSchema } from './student.schema';

export type UserStudentDocument = UserStudent & Document;

@Schema()
export class UserStudent {
  @Prop()
  email: string;
  // @Prop({ type: StudentSchema })
  // profile: Student;

  @Prop()
  profile: string;

  docType: string;
}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);
