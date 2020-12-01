export default {
  getCompFuncByKey(key: string, ascending = true) {
    return (a: any, b: any): number => (a[key] - b[key]) * (ascending ? 1 : -1);
  },
  sumByKey(array: Array<object>, key: string, base = 0): number {
    return array.reduce((sum: number, value: any) => sum + value[key], base);
  },
};
