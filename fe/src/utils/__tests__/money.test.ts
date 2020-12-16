import utils from '../index';

describe('금액이 주어졌을 때,', () => {
  test('천원대의 금액이 들어오면 X.X천을 반환한다.', () => {
    expect(utils.summaryOfMoney(4500)).toBe('4.5천');
  });
  test('만원대의 금액이 들어오면 X.X만을 반환한다.', () => {
    expect(utils.summaryOfMoney(11000)).toBe('1.1만');
  });
  test('십만원대의 금액이 들어오면 X.X십만을 반환한다.', () => {
    expect(utils.summaryOfMoney(490000)).toBe('4.9십만');
  });
  test('백만원대의 금액이 들어오면 X.X백만을 반환한다.', () => {
    expect(utils.summaryOfMoney(1200040)).toBe('1.2백만');
  });
  test('천만원대의 금액이 들어오면 X.X천만을 반환한다.', () => {
    expect(utils.summaryOfMoney(26000400)).toBe('2.6천만');
  });
  test('억대의 금액이 들어오면 X.X억을 반환한다.', () => {
    expect(utils.summaryOfMoney(560000400)).toBe('5.6억');
  });
  test('십억대의 금액이 들어오면 X.X십억을 반환한다.', () => {
    expect(utils.summaryOfMoney(1234004000)).toBe('1.2십억');
  });
  test('백대의 금액이 들어오면 X.X백억을 반환한다.', () => {
    expect(utils.summaryOfMoney(43240040000)).toBe('4.3백억');
  });
  test('천억대의 금액이 들어오면 X.X천억을 반환한다.', () => {
    expect(utils.summaryOfMoney(632400400000)).toBe('6.3천억');
  });
  test('조의 금액이 들어오면 X.X천억을 반환한다.', () => {
    expect(utils.summaryOfMoney(9824004000000)).toBe('98.2천억');
  });
});
