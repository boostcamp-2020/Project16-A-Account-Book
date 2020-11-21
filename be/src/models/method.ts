import { Schema, model, Document } from 'mongoose';

const MethodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export interface Method extends Document {
  title: String;
}

export const MethodModel = model<Method>('method', MethodSchema);
