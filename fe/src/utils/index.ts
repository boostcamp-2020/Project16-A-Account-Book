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
};
