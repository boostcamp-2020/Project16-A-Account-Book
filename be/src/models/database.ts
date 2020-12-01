import mongoose from 'mongoose';
import { getDbUri } from '../config';
import {CategoryModel} from './category';
import {AccountModel} from './account';
import {MethodModel} from './method';
import {TransactionModel} from './transaction';
import {UserModel} from './user';

let database: mongoose.Connection;
export const connect =async () => {
  const DB_URI = getDbUri();

  if (database) {
    return;
  }
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  database = mongoose.connection;
  database.models.categories =CategoryModel;
  database.models.accounts =AccountModel;
  database.models.methods =MethodModel;
  database.models.transcations =TransactionModel;
  database.models.users =UserModel;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
