import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Student, StudentSchema } from 'src/student/student.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, lowercase: true, type: String })
  email: string;

  @Prop({ type: StudentSchema })
  profile: Student;
}

export const UserSchema = SchemaFactory.createForClass(User);
