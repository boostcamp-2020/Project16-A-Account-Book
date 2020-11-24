import mongoose from 'mongoose';
import { totalSeed } from '../seeds';
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
  database.on('open', async () => {
    await database.db
      .listCollections()
      .toArray(async (err, collectionNames) => {
        if (err) return;
        for (let i = 0; i < collectionNames.length; i += 1) {
          await database.dropCollection(collectionNames[i].name);
        }
        await totalSeed();
      });
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
