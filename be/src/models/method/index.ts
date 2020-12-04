import { Schema, model, Document, Model } from 'mongoose';
import { createDefaultMethod } from './static';

export interface IMethod {
  title: string;
}

export interface IMethodDocument extends IMethod, Document {}
export interface IMethodModel extends Model<IMethodDocument> {
  createDefaultMethod(): Promise<IMethodDocument[]>;
}
const MethodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});
MethodSchema.statics.createDefaultMethod = createDefaultMethod;
export const MethodModel = model<IMethodDocument, IMethodModel>(
  'methods',
  MethodSchema,
);
