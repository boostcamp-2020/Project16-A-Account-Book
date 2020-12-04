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
  price: {
    type: Number,
    required: true,
  },
  excludeFromBudget: {
    type: Boolean,
    default: 'false',
  },
});

export interface ITransaction {
  client: string;
  method: string;
  category: string;
  date: Date;
  price: number;
  memo?: string;
  excludeFromBudget?: boolean;
}

export interface ITransactionDocument extends ITransaction, Document {}

export const TransactionModel = model<ITransactionDocument>(
  'transactions',
  TransactionSchema,
);
