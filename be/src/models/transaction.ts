import { Schema, Types, model, Document } from 'mongoose';

const TransactionSchema = new Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  memo: {
    type: String,
  },
  method: {
    type: Types.ObjectId,
    required: true,
    ref: 'methods',
  },
  category: {
    type: Types.ObjectId,
    required: true,
    ref: 'categories',
  },
  excludeFromBudget: {
    type: Boolean,
    default: 'false',
  },
});

export interface Transaction extends Document {
  slice: any;
  client: String;
  method: String;
  classification: String;
  category: String;
  date: String;
  memo?: String;
  excludeFromBudget?: Boolean;
}

export const TransactionModel = model<Transaction>(
  'transactions',
  TransactionSchema,
);
