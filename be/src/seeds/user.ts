import { UserModel, IUserDocument } from 'models/user';
import { getRandomLengthString } from '../libs/random';

interface DummyArray {
  id: string;
  nickname: string;
}

const SEED_LENGTH = 5;

export const up = () => {
  return new Promise<IUserDocument[]>((resolve: any) => {
    const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
      const id = getRandomLengthString({ minLength: 5, maxLength: 16 });
      const nickname = getRandomLengthString({ minLength: 5, maxLength: 16 });
      dummyArray.push({
        id,
        nickname,
      });
      return dummyArray;
    };
    const dummies = Array(SEED_LENGTH).fill(0).reduceRight(reducer, []);

    UserModel.create(dummies).then((users: IUserDocument) => {
      resolve(users);
    });
  });
};

export const down = async () => {
  await UserModel.deleteMany({});
};
