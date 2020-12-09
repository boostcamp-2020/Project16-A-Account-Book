import { MethodModel } from '.';

export default {};

export async function createDefaultMethod(this: any) {
  const titles = ['현금', '카드', '미분류'];
  const methods = titles.reduce(
    (acc: Array<Object>, title: string) => [...acc, { title }],
    [],
  );
  return MethodModel.insertMany(methods);
}
