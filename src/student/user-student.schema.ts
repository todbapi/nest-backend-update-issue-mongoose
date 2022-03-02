import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.schema';
import { StudentDocument, StudentSchema } from './student.schema';

export type UserStudentDocument = UserStudent & Document;

@Schema()
export class UserStudent extends User {
  @Prop({ type: StudentSchema })
  profile: StudentDocument;
}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);
