export default {
  moneyFormatter(money: number) {
    return money.toLocaleString();
  },
  toggleTargetInList<T>(list: T[], target: T): T[] {
    const set = new Set<T>(list);
    if (set.has(target)) {
      set.delete(target);
    } else {
      set.add(target);
    }
    return [...set];
  },
  summaryOfMoney(money: number): string {
    if (money < 1000) {
      return String(money);
    }
    const NUM_OF_DECIMAL_PLACE = 1;
    const matcher = [
      [10 ** 3, '천'],
      [10 ** 4, '만'],
      [10 ** 5, '십만'],
      [10 ** 6, '백만'],
      [10 ** 7, '천만'],
      [10 ** 8, '억'],
      [10 ** 9, '십억'],
      [10 ** 10, '백억'],
      [10 ** 11, '천억'],
    ];
    let matchedDivisitonBy;
    let matchedUnit;

    type matcherType = [divisionBy: number | any, unit: string];
    // eslint-disable-next-line no-restricted-syntax
    for (const matcherItem of matcher) {
      const [divisionBy, unit] = matcherItem as matcherType;
      if (Math.floor(money / divisionBy) === 0) {
        break;
      }
      matchedDivisitonBy = divisionBy;
      matchedUnit = unit;
    }
    return `${Number.parseFloat(`${money / matchedDivisitonBy}`).toFixed(
      NUM_OF_DECIMAL_PLACE,
    )}${matchedUnit}`;
  },
};
