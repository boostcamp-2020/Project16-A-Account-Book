import date from '../date';

describe('monthMaxDate 테스트', () => {
  test('Date객체가 입력되면 그 년, 월에 맞는 최대 날짜를 출력한다', () => {
    expect(date.monthMaxDate(new Date('2020-11-01'))).toBe(30);
    expect(date.monthMaxDate(new Date('2020-12-25'))).toBe(31);
    expect(date.monthMaxDate(new Date('2020-02-01'))).toBe(29);
    expect(date.monthMaxDate(new Date('2019-02-01'))).toBe(28);
  });
});
