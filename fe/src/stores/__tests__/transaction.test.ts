import { calTotalPriceByCategories } from '../Transaction/transactionStoreUtils';
import { transactionList } from './transaction-data';

describe('거래내역 리스트가 주어졌을 때,', () => {
  const result = calTotalPriceByCategories(transactionList);
  test('지출 타입의 카테고리들의 합을 구한다.', () => {
    const expectedResult = {
      생활: {
        _id: '5fd2e598b6480e30974d747d',
        title: '생활',
        color: '#f44c5e',
        totalPrice: 3000,
      },
      교통: {
        _id: '5fd2e598b6480e30974d7481',
        title: '교통',
        color: '#bbfe85',
        totalPrice: 1000,
      },
      '뷰티/미용': {
        _id: '5fd2e598b6480e30974d7480',
        title: '뷰티/미용',
        color: '#19b99f',
        totalPrice: 1000,
      },
    };
    expect(result.totalExpenseCategoryObj).toEqual(expectedResult);
  });
  test('입금 타입의 카테고리들의 합을 구한다.', () => {
    const expectedResult = {
      금융수입: {
        _id: '5fd2e598b6480e30974d748a',
        title: '금융수입',
        color: '#24da94',
        totalPrice: 400000,
      },
    };
    expect(result.totalIncomeCategoryObj).toEqual(expectedResult);
  });
});
