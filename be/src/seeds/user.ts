import { randomNumber, randomString } from '../libs/random';
import { UserModel, User } from '../models';

interface DummyArray {
  id: string;
}
const SEED_LENGTH = 10;
export const up = async (): Promise<User> => {
  const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
    const randomLength = randomNumber({ start: 5, end: 15 });
    const randomId = randomString({ length: randomLength });
    dummyArray.push({
      id: randomId,
    });
    return dummyArray;
  };
  const dummies = Array(SEED_LENGTH).fill(0).reduceRight(reducer, []);
  const users = await UserModel.create(dummies);
  return users;
};

export const down = async () => {
  await UserModel.deleteMany({});
};
