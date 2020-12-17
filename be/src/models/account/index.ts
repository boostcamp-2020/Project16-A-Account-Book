import { ITransaction } from 'models/transaction';
import { Schema, Types, model, Document, Model } from 'mongoose';
import { IUserDocument, UserSchema } from '../user';

import {
  findByPkAndPushTransaction,
  findByTitleAndOwner,
  findAllTransactionExceptDeleted,
  findUnclassifiedCategory,
  findUnclassifiedMethod,
  findAccountByUserId,
  findByPkAndPushUser,
  findDuplicateCategory,
  findOneAndDeleteUser,
  findMethodByTitle,
  findByPkAndPushCategory,
  findByPkAndPushMethod,
} from './static';

export interface IAccount {
  title: string;
  transactions?: string[] | ITransaction[];
  categories?: string[];
  methods?: string[];
  ownerName?: string;
  users: Types.DocumentArray<IUserDocument>;
  imageUrl?: String;
}

export interface AccountDocument extends Document {
  title: string;
  transactions?: [String];
  categories?: [String];
  methods?: [String];
  ownerName?: string;
  users: Types.DocumentArray<IUserDocument>;
  imageUrl?: String;
}

export interface IAccountDocument extends IAccount, Document {}

export interface IAccountModel extends Model<IAccountDocument> {
  findByPkAndPushTransaction(
    accountObjId: string,
    transactionObjId: string,
  ): Promise<any>;
  findByTitleAndOwner(title: string, owner: string): Promise<IAccountDocument>;
  findAllTransactionExceptDeleted(
    accountObjId: string,
    startDate: string,
    endDate: string,
  ): Promise<any>;
  findUnclassifiedCategory(accountObjId: string): Promise<any>;
  findUnclassifiedMethod(accountObjId: string): Promise<any>;
  findAccountByUserId(userId: string): Promise<any>;
  findByPkAndPushUser(userObjId: string, accountObjId: string): Promise<any>;
  findDuplicateCategory(
    accountObjId: string,
    type: string,
    title: string,
  ): Promise<any>;
  findOneAndDeleteUser(accountObjId: string, userObjId: string): Promise<any>;

  findMethodByTitle(accountObjId: string, methodTitle: string): Promise<any>;
  findByPkAndPushCategory(
    accountObjId: string,
    categoryObjId: string,
  ): Promise<any>;
  findByPkAndPushMethod(
    accountObjId: string,
    methodObjId: string,
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
  ownerName: String,
  users: [UserSchema],
  imageUrl: String,
});

AccountSchema.statics.findByPkAndPushTransaction = findByPkAndPushTransaction;
AccountSchema.statics.findByTitleAndOwner = findByTitleAndOwner;
AccountSchema.statics.findAllTransactionExceptDeleted = findAllTransactionExceptDeleted;
AccountSchema.statics.findAccountByUserId = findAccountByUserId;
AccountSchema.statics.findByPkAndPushUser = findByPkAndPushUser;
AccountSchema.statics.findUnclassifiedCategory = findUnclassifiedCategory;
AccountSchema.statics.findUnclassifiedMethod = findUnclassifiedMethod;
AccountSchema.statics.findDuplicateCategory = findDuplicateCategory;
AccountSchema.statics.findOneAndDeleteUser = findOneAndDeleteUser;
AccountSchema.statics.findMethodByTitle = findMethodByTitle;
AccountSchema.statics.findByPkAndPushCategory = findByPkAndPushCategory;
AccountSchema.statics.findByPkAndPushMethod = findByPkAndPushMethod;

export const AccountModel = model<IAccountDocument, IAccountModel>(
  'accounts',
  AccountSchema,
);
