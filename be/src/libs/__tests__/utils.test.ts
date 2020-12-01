import { categoryType } from '../../models/category';
import { filterTransactionByType } from '../utils';

const data = [
  {
    category: {
      title: '자동차',
      type: categoryType.INCOME,
      color: '#F63C39',
    },
    price: 10,
  },
  {
    category: {
      title: '쇼핑',
      type: categoryType.EXPENSE,
      color: '#FFFFF9',
    },
    price: 30,
  },
  {
    category: {
      title: '교육',
      type: categoryType.EXPENSE,
      color: '#FFFFF9',
    },
    price: 50,
  },
];
test('타입이 income인 거래내역 리스트를 반환한다.', () => {
  expect(filterTransactionByType(data, categoryType.INCOME)).toEqual(
    data.slice(0, 1),
  );
  expect(filterTransactionByType(data, categoryType.EXPENSE)).toEqual(
    data.slice(1),
  );
});
