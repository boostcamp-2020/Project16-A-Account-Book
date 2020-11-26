import mongoose from 'mongoose';
import { getDbUri } from '../config';

let database: mongoose.Connection;
export const connect = () => {
  const DB_URI = getDbUri();

  if (database) {
    return;
  }
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  database = mongoose.connection;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
