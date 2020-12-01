import { Schema, model, Document } from 'mongoose';

export const CategoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

const CategorySchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['INCOME', 'EXPENSE'],
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
    validate: [
      (color: string) => color.length === 7,
      '{PATH} must have length 7',
    ],
  },
});

export interface Category extends Document {
  type: String;
  title: String;
}

export const CategoryModel = model<Category>('categories', CategorySchema);
