import { randomNumber, randomString } from '../libs/random';
import { CategoryModel } from '../models';

interface DummyArray {
  title: string;
  type: string;
}
const enums = ['INCOME', 'EXPENSE', 'TRANSFER'];
const SEED_LENGTH = 15;

export const up = async () => {
  const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
    const randomLength = randomNumber({ start: 2, end: 10 });
    const randomTitle = randomString({ length: randomLength });
    dummyArray.push({
      title: randomTitle,
      type: enums[randomLength % 3],
    });
    return dummyArray;
  };
  const dummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
  await CategoryModel.create(dummies);
};
export const down = async () => {
  await CategoryModel.deleteMany({});
};
