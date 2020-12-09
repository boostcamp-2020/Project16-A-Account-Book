export const getRandomColor = (): string => {
  const hexCode = new Array(16).fill(0).map((x, idx) => idx.toString(16));
  const colorStringLength = 6;
  const color = new Array(colorStringLength).fill(0).reduce((colorString) => {
    const hexIndex = Math.floor((Math.random() * 100) % hexCode.length);
    return colorString + hexCode[hexIndex];
  }, '');
  return `#${color}`;
};
export default {};
