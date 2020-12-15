import {
  calTotalPriceByCategories,
  addPercentAndGetArray,
} from '../Transaction/transactionStoreUtils';
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

describe('카테고리별 총합의 객체와 타입의 총 금액이 주어졌을 때,', () => {
  test('수입의 경우, 퍼센트에 대한 계산이 추가된 객체의 배열이 반환된다.', () => {
    const incomeCategoreis = {
      금융수입: {
        _id: '1',
        title: '금융수입',
        color: '1',
        totalPrice: 10,
      },
      기타수입: {
        _id: '2',
        title: '기타수입',
        color: '2',
        totalPrice: 40,
      },
    };
    const expectedResult = [
      { ...incomeCategoreis['금융수입'], percent: 20 },
      {
        ...incomeCategoreis['기타수입'],
        percent: 80,
      },
    ];
    expect(addPercentAndGetArray(incomeCategoreis, 50)).toEqual(expectedResult);
  });
});
