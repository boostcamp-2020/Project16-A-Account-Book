import { randomNumber, randomString } from '../libs/random';
import { MethodModel, Method } from '../models';

interface DummyArray {
  title: string;
}
const SEED_LENGTH = 15;

export const up = async (): Promise<Method> => {
  const reducer = (dummyArray: [DummyArray]): [DummyArray] => {
    const randomLength = randomNumber({ start: 2, end: 15 });
    const randomTitle = randomString({ length: randomLength });
    dummyArray.push({
      title: randomTitle,
    });
    return dummyArray;
  };

  const dummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
  const methods = await MethodModel.create(dummies);
  return methods;
};

export const down = async () => {
  await MethodModel.deleteMany({});
};
