import mongoose from 'mongoose';
import { getDbUri } from '../config';

let database: mongoose.Connection;
export const connect = async () => {
  const DB_URI = getDbUri();

  if (database) {
    return;
  }
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
  });

  database = mongoose.connection;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
