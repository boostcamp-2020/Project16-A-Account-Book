import { Schema, model, Document } from 'mongoose';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

const CategorySchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: Object.values(categoryType),
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
    validate: (color: string) => color.length === 7,
  },
});

export interface ICategory {
  type: string;
  title: string;
  color: string;
}

export interface ICategoryDocument extends ICategory, Document {}

export const CategoryModel = model<ICategoryDocument>(
  'categories',
  CategorySchema,
);
