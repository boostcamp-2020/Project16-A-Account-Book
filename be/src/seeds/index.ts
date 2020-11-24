import * as categorySeed from './category';
import * as methodSeed from './method';

export const totalSeed = async () => {
  await categorySeed.up();
  await methodSeed.up();
};

export default {};
