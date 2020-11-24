import * as categorySeed from './category';
import * as methodSeed from './method';
import * as UserSeed from './user';

export const totalSeed = async () => {
  return Promise.all([UserSeed.up(), methodSeed.up(), categorySeed.up()]);
};

export default {};
