import { ITransaction } from 'models/transaction';
import { Schema, Types, model, Document, Model } from 'mongoose';

import {
  findByPkAndPushTransaction,
  findByPkAndGetTransCategory,
  findByTitleAndOwner,
  findAllTransactionExceptDeleted,
  findUnclassifiedCategory,
} from './static';

export interface IAccount {
  title: string;
  transactions?: string[] | ITransaction[];
  categories?: string[];
  methods?: string[];
}

export interface AccountDocument extends Document {
  title: string;
  transactions?: [String];
  categories?: [String];
  methods?: [String];
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
  findByTitleAndOwner(title: string, owner: string): Promise<IAccountDocument>;
  findAllTransactionExceptDeleted(
    accountObjId: string,
    startDate: string,
    endDate: string,
  ): Promise<any>;
  findUnclassifiedCategory(accountObjId: string): Promise<any>;
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
  owner: String,
});

AccountSchema.statics.findByPkAndPushTransaction = findByPkAndPushTransaction;
AccountSchema.statics.findByPkAndGetTransCategory = findByPkAndGetTransCategory;
AccountSchema.statics.findByTitleAndOwner = findByTitleAndOwner;
AccountSchema.statics.findAllTransactionExceptDeleted = findAllTransactionExceptDeleted;
AccountSchema.statics.findUnclassifiedCategory = findUnclassifiedCategory;

export const AccountModel = model<IAccountDocument, IAccountModel>(
  'accounts',
  AccountSchema,
);
