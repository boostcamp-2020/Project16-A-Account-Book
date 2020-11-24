import { randomLengthString } from '../libs/random';
import { UserModel, User } from '../models';

interface DummyArray {
  id: string;
}

const SEED_LENGTH = 5;

export const up = () => {
  return new Promise<[User]>((resolve: any) => {
    const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
      const id = randomLengthString({ minLength: 5, maxLength: 16 });
      dummyArray.push({
        id,
      });
      return dummyArray;
    };
    const dummies = Array(SEED_LENGTH).fill(0).reduceRight(reducer, []);

    UserModel.create(dummies).then((users: User) => {
      resolve(users);
    });
  });
};

export const down = async () => {
  await UserModel.deleteMany({});
};
