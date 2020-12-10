import date from '../date';

describe('monthMaxDate 테스트', () => {
  test('Date객체가 입력되면 그 년, 월에 맞는 최대 날짜를 출력한다', () => {
    expect(date.monthMaxDate(new Date('2020-11-01'))).toBe(30);
    expect(date.monthMaxDate(new Date('2020-12-25'))).toBe(31);
    expect(date.monthMaxDate(new Date('2020-02-01'))).toBe(29);
    expect(date.monthMaxDate(new Date('2019-02-01'))).toBe(28);
  });
});

describe('해당 날짜가 두 날짜 사이에 있는지 확인하는 테스트', () => {
  const startDate = new Date('2020-04-01');
  const endDate = new Date('2020-05-01');
  test('날짜가 범위보다 이전이면 false를 반환한다.', () => {
    const targetDate = new Date('2020-03-31');
    expect(date.isDateInDateRange(targetDate, startDate, endDate)).toBeFalsy();
  });
  test('날짜가 범위보다 이후이면 false를 반환한다.', () => {
    const targetDate = new Date('2020-05-02');
    expect(date.isDateInDateRange(targetDate, startDate, endDate)).toBeFalsy();
  });
  test('날짜가 범위안에 있으면 true 반환한다.', () => {
    const targetDate = new Date('2020-04-04');
    expect(date.isDateInDateRange(targetDate, startDate, endDate)).toBeTruthy();
  });
});
