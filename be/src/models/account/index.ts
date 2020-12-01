import { Schema, Types, model, Document, Model } from 'mongoose';
import { findByPkAndPushTransaction } from './static';

export interface IAccount {
  transactions?: string[];
  categories?: string[];
  methods?: string[];
}

export interface IAccountDocument extends IAccount, Document {}

export interface IAccountModel extends Model<IAccountDocument> {
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

export const AccountModel = model<IAccountDocument, IAccountModel>(
  'accounts',
  AccountSchema,
);
