import { Schema, Types, model, Document, Model } from 'mongoose';
import { findByPkAndPopulateAll } from './static';

export interface ITransaction {
  client: string;
  method: string;
  category: string;
  date: Date;
  price: number;
  memo?: string;
  excludeFromBudget?: boolean;
  isDeleted?: boolean;
}
export interface TransactionDocument extends Document {
  client: string;
  method: string;
  category: string;
  date: Date;
  price: number;
  memo?: string;
  excludeFromBudget?: boolean;
  isDeleted?: boolean;
}

export interface ITransactionDocument extends ITransaction, Document {}

export interface ITransactionModel extends Model<ITransactionDocument> {
  findByPkAndPopulateAll(
    transactionObjId: string,
  ): Promise<ITransactionDocument>;
}
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
  isDeleted: {
    type: Boolean,
    default: 'false',
  },
});

TransactionSchema.statics.findByPkAndPopulateAll = findByPkAndPopulateAll;

export const TransactionModel = model<ITransactionDocument, ITransactionModel>(
  'transactions',
  TransactionSchema,
);
