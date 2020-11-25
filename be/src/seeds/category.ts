import { getRandomNumber, getRandomLengthString } from '../libs/random';
import { CategoryModel, Category } from '../models';

interface DummyArray {
  title: string;
  type: string;
}
const enums = ['INCOME', 'EXPENSE', 'TRANSFER'];
const SEED_LENGTH = 15;

export const up = () => {
  return new Promise<[Category]>((resolve: any) => {
    const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
      const randomLength = getRandomNumber({ start: 2, end: 10 });
      const title = getRandomLengthString({ minLength: 2, maxLength: 10 });
      dummyArray.push({
        title,
        type: enums[randomLength % 3],
      });
      return dummyArray;
    };
    const dummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
    CategoryModel.create(dummies).then((categories: Category) =>
      resolve(categories),
    );
  });
};
export const down = async () => {
  await CategoryModel.deleteMany({});
};
