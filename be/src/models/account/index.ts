import { Schema, Types, model, Document, Model } from 'mongoose';
import {
  findByPkAndPushTransaction,
  findByPkAndGetTransCategory,
} from './static';

export interface IAccount {
  title: string;
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
  findByPkAndGetTransCategory(
    accountObjId: string,
    startDate: string,
    endDate: string,
  ): Promise<any>;
}

export const AccountSchema = new Schema({
  title: {
    type: String,
  },
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
AccountSchema.statics.findByPkAndGetTransCategory = findByPkAndGetTransCategory;

export const AccountModel = model<IAccountDocument, IAccountModel>(
  'accounts',
  AccountSchema,
);
