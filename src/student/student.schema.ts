import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  docType: string;

  @Prop()
  name: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
