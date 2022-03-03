import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserStudentDocument = UserStudent & Document;

@Schema()
export class UserStudent {
  email: string;
  @Prop()
  name: string;
}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);
