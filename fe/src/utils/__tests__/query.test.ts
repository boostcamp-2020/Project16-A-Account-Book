import makeQueryString from './query';

describe('makeQueryString test', () => {
  test('test1', () => {
    const queries = {
      year: 2020,
      month: 8,
      category: '식비',
    };
    expect(makeQueryString(queries)).toBe('?year=2020&month=8&category=식비');
  });
});
