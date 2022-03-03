import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, lowercase: true, type: String })
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
