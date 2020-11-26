import parseDate from './parseDate';

test('size가 sm이면 Date객체가 들어왔을 때 "일"과 "요일"을 return 한다', () => {
  const test1 = new Date('2020-11-23');
  const test2 = new Date('1995-02-28');

  expect(parseDate(test1, 'dz')).toBe('23일 월요일');
  expect(parseDate(test1, 'ymdz')).toBe('2020년 11월 23일 월요일');
  expect(parseDate(test2, 'dz')).toBe('28일 화요일');
  expect(parseDate(test2, 'ymdz')).toBe('1995년 2월 28일 화요일');
});
