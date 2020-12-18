export default {
  getCompFuncByKey(key: string, ascending = true) {
    return (a: any, b: any): number => (a[key] - b[key]) * (ascending ? 1 : -1);
  },
  sumByKey(array: Array<object>, key: string, base = 0): number {
    return array.reduce((sum: number, value: any) => sum + value[key], base);
  },
  getLineLength(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  },
  getPosition(point: string): [number, number] {
    const [x, y] = point.split(',');
    return [+x, +y];
  },
  getPolyLineLength(polyLinePoints: string) {
    const points = polyLinePoints.split(' ');
    const numOfPoints = points.length;
    const length = points.reduce((sumLength, point, idx) => {
      if (idx >= numOfPoints - 1) {
        return sumLength;
      }
      const [x1, y1] = this.getPosition(point);
      const [x2, y2] = this.getPosition(points[idx + 1]);
      return sumLength + this.getLineLength(x1, y1, x2, y2);
    }, 0);
    return length;
  },
};
