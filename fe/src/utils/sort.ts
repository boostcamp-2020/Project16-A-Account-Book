export default {
  compByKey(key: string, ascending = true) {
    return (a: any, b: any): number => {
      if (a[key] > b[key]) return ascending ? 1 : -1;
      if (a[key] < b[key]) return ascending ? -1 : 1;
      return 0;
    };
  },
};
