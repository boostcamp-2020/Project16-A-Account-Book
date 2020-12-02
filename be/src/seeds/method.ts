import { MethodModel, IMethodDocument } from 'models/method';
import { getRandomLengthString } from '../libs/random';

interface DummyArray {
  title: string;
}
const SEED_LENGTH = 15;

export const up = () => {
  return new Promise<[IMethodDocument]>((resolve: any) => {
    const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
      const title = getRandomLengthString({ minLength: 2, maxLength: 15 });
      dummyArray.push({
        title,
      });
      return dummyArray;
    };

    const dummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
    MethodModel.create(dummies).then((methods: IMethodDocument) =>
      resolve(methods),
    );
  });
};

export const down = async () => {
  await MethodModel.deleteMany({});
};
