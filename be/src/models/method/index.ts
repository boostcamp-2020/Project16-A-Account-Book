import { Schema, model, Document } from 'mongoose';

const MethodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export interface IMethod {
  title: string;
}
export interface IMethodDocument extends IMethod, Document {}
export const MethodModel = model<IMethodDocument>('methods', MethodSchema);
