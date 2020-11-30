import { Schema, Types, model, Document, Model } from 'mongoose';
import { findByPkAndPushTransaction } from './static';

export interface AccountDocument extends Document {
  transactions?: [String];
  categories?: [String];
  methods?: [String];
}

export interface IAccount extends AccountDocument {}
export interface IAccountDocument extends Model<IAccount> {
  findByPkAndPushTransaction(
    accountObjId: string,
    transactionObjId: string,
  ): Promise<any>;
}

export const AccountSchema = new Schema({
  transactions: [
    {
      type: Types.ObjectId,
      ref: 'transactions',
    },
  ],
  categories: [
    {
      type: Types.ObjectId,
      ref: 'categories',
    },
  ],
  methods: [
    {
      type: Types.ObjectId,
      ref: 'methods',
    },
  ],
});

AccountSchema.statics.findByPkAndPushTransaction = findByPkAndPushTransaction;

export const AccountModel = model<IAccount, IAccountDocument>(
  'accounts',
  AccountSchema,
);
