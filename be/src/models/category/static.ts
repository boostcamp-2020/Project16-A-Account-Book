import { getRandomColor } from 'libs/random';
import { categoryType, ICategoryDocument } from '.';

export async function createDefaultCategory(
  this: any,
): Promise<ICategoryDocument[]> {
  const expense = [
    '식비',
    '생활',
    '온라인쇼핑',
    '패션',
    '뷰티/미용',
    '교통',
    '의료/건강',
    '금융',
    '문화/여가',
    '교육/학습',
    '반려동물',
    '기타지출',
  ];
  const income = ['급여', '용돈', '금융수입', '사업수입', '기타수입'];
  const reducer = (type: string) => (acc: Array<Object>, title: string) => {
    const color = getRandomColor();
    acc.push({
      title,
      color,
      type,
    });
    return acc;
  };
  const unclassified = {
    title: '미분류',
    color: '#000000',
    type: categoryType.UNCLASSIFIED,
  };
  const categories = expense.reduce(reducer(categoryType.EXPENSE), []);
  income.reduce(reducer(categoryType.INCOME), categories);
  categories.push(unclassified);
  return this.insertMany(categories);
}

export default {};
