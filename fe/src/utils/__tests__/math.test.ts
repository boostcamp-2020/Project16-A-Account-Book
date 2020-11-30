import math from '../math';

describe('객체의 배열이 주어졌을 때,', () => {
  const ageList = [{ age: 5 }, { age: 1 }, { age: 3 }];
  const ascAgeList = [{ age: 1 }, { age: 3 }, { age: 5 }];
  const descAgeList = [{ age: 5 }, { age: 3 }, { age: 1 }];

  test('주어진 키 값에 맞춰서 오름차순으로 정렬한다', () => {
    const ascAgeComp = math.compByKey('age');
    expect(ageList.sort(ascAgeComp)).toEqual(ascAgeList);
    expect(ageList.sort(ascAgeComp)).not.toEqual(descAgeList);
  });
  test('주어진 키 값에 맞춰서 내림차순으로 정렬한다', () => {
    const descAgeComp = math.compByKey('age', false);
    expect(ageList.sort(descAgeComp)).toEqual(descAgeList);
    expect(ageList.sort(descAgeComp)).not.toEqual(ascAgeList);
  });
});

test('주어진 키 값에 맞춰서 오름차순으로 정렬한다', () => {
  const ageList = [{ age: 5 }, { age: 1 }, { age: 3 }];
  expect(math.sumByKey(ageList, 'age')).toBe(9);
});
