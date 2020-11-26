import { getRandomLengthString } from '../libs/random';
import { MethodModel, Method } from '../models';

interface DummyArray {
  title: string;
}
const SEED_LENGTH = 15;

export const up = () => {
  return new Promise<[Method]>((resolve: any) => {
    const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
      const title = getRandomLengthString({ minLength: 2, maxLength: 15 });
      dummyArray.push({
        title,
      });
      return dummyArray;
    };

    const dummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
    MethodModel.create(dummies).then((methods: Method) => resolve(methods));
  });
};

export const down = async () => {
  await MethodModel.deleteMany({});
};
