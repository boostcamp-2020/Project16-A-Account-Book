import mongoose from 'mongoose';
import { totalSeed } from './seeds';
import { getDbUri } from './config';

const init = async () => {
  mongoose.connect(getDbUri(), {
    useNewUrlParser: true,
  });

  const database = mongoose.connection;
  database.on('open', async () => {
    await database.db
      .listCollections()
      .toArray(async (err, collectionNames) => {
        if (err) return;
        const dropFlow = [];
        for (let i = 0; i < collectionNames.length; i += 1) {
          dropFlow.push(database.dropCollection(collectionNames[i].name));
        }
        await Promise.all(dropFlow);
        if (process.env.NODE_ENV === 'SEED') await totalSeed();
        process.exit(0);
      });
  });
};

init();
