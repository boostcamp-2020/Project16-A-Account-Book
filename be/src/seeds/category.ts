import { CategoryModel, ICategory, categoryType } from 'models/category';
import { getRandomColor } from 'libs/random';

const SEED_LENGTH = 15;

export const up = () => {
  const typeAndTitles = {
    INCOME: {
      type: categoryType.INCOME,
      title: ['급여', '용돈', '금융수입', '사업수입', '기타수입'],
    },
    EXPENSE: {
      type: categoryType.EXPENSE,
      title: [
        '자동차',
        '문화',
        '교육',
        '패션',
        '온라인쇼핑',
        '교통',
        '의료',
        '생활',
        '주거',
        '경조',
      ],
    },
  };
  return new Promise<[ICategory]>((resolve: any) => {
    const reducer = (
      dummyArray: ICategory[],
      cur: number,
      idx: number,
    ): ICategory[] => {
      let title;
      let type;
      if (idx < typeAndTitles.INCOME.title.length) {
        title = typeAndTitles.INCOME.title[idx];
        type = typeAndTitles.INCOME.type;
      } else {
        title =
          typeAndTitles.EXPENSE.title[idx - typeAndTitles.INCOME.title.length];
        type = typeAndTitles.EXPENSE.type;
      }
      dummyArray.push({
        title,
        type,
        color: getRandomColor(),
      });
      return dummyArray;
    };
    const categoryDummies = Array(SEED_LENGTH).fill(0).reduce(reducer, []);
    CategoryModel.create(categoryDummies).then((categories: ICategory) =>
      resolve(categories),
    );
  });
};
export const down = async () => {
  await CategoryModel.deleteMany({});
};
