import { Schema, model, Document, Model } from 'mongoose';
import { createDefaultCategory } from './static';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  UNCLASSIFIED: 'UNCLASSIFIED',
};

export interface ICategory {
  type: string;
  title: string;
  color: string;
}

export interface ICategoryDocument extends ICategory, Document {}
export interface ICategoryModel extends Model<ICategoryDocument> {
  createDefaultCategory(): Promise<ICategoryDocument[]>;
}
const CategorySchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: Object.values(categoryType),
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    validate: (color: string) => color.length === 7,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

CategorySchema.statics.createDefaultCategory = createDefaultCategory;

export const CategoryModel = model<ICategoryDocument, ICategoryModel>(
  'categories',
  CategorySchema,
);
