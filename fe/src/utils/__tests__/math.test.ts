import math from '../math';

describe('객체의 배열이 주어졌을 때,', () => {
  const ageList = [{ age: 5 }, { age: 1 }, { age: 3 }];
  const ascAgeList = [{ age: 1 }, { age: 3 }, { age: 5 }];
  const descAgeList = [{ age: 5 }, { age: 3 }, { age: 1 }];

  test('주어진 키 값에 맞춰서 오름차순으로 정렬한다', () => {
    const ascAgeComp = math.getCompFuncByKey('age');
    expect(ageList.sort(ascAgeComp)).toEqual(ascAgeList);
    expect(ageList.sort(ascAgeComp)).not.toEqual(descAgeList);
  });
  test('주어진 키 값에 맞춰서 내림차순으로 정렬한다', () => {
    const descAgeComp = math.getCompFuncByKey('age', false);
    expect(ageList.sort(descAgeComp)).toEqual(descAgeList);
    expect(ageList.sort(descAgeComp)).not.toEqual(ascAgeList);
  });
});

test('주어진 키에 해당하는 값들을 더한다.', () => {
  const ageList = [{ age: 5 }, { age: 1 }, { age: 3 }];
  expect(math.sumByKey(ageList, 'age')).toBe(9);
});

test('두 점 사이의 거리를 계산한다', () => {
  expect(math.getLineLength(10, 10, 0, 0)).toBe(Math.sqrt(200));
});

test(' "x,y"가 주어졌을 때, 숫자로 된 x, y 의 배열을 반환한다.', () => {
  expect(math.getPosition('2,4')).toEqual([2, 4]);
});

test('x,y좌표가 여러 개인 스트링이 주어졌을 때, 해당 polyline의 길이를 계산한다.', () => {
  const line1 = '1,1 2,2 3,3 4,4';
  expect(math.getPolyLineLength(line1)).toBe(3 * Math.sqrt(2));
});
