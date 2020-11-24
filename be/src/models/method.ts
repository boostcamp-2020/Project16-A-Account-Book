import { Schema, model, Document } from 'mongoose';

const MethodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export interface Method extends Document {
  [x: string]: any;
  title: String;
}

export const MethodModel = model<Method>('methods', MethodSchema);
