import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Student } from 'src/student/student.schema';

export type UserDocument = User & Document;

@Schema({ discriminatorKey: 'docType' })
export class User {
  @Prop({ unique: true, lowercase: true, type: String })
  email: string;

  @Prop({ type: Student })
  profile: Student;

  @Prop()
  docType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
