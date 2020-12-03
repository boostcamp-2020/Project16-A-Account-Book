export const getRandomNumber = ({
  start,
  end,
}: {
  start: number;
  end: number;
}): number => Math.floor(Math.random() * end + start);

export const getRandomString = ({ length = 5 }: { length: number }): string => {
  const ASCII_A = 97;
  const MAX_ALPHABET_COUNT = 26;
  const reducer = (string: string): string => {
    const randomValue = getRandomNumber({ start: 0, end: MAX_ALPHABET_COUNT });
    return string + String.fromCharCode(ASCII_A + randomValue);
  };
  return Array(length).fill(0).reduce(reducer, '');
};

export const getRandomDate = (): Date => {
  const baseDate = new Date('2020-01-01 00:00:00').getTime();
  const YEAR_TO_MILLISECOND = 3.154e10;
  const randomMilliscond = getRandomNumber({
    start: 0,
    end: YEAR_TO_MILLISECOND,
  });
  return new Date(baseDate + randomMilliscond);
};
interface RandomLengthString {
  minLength?: number;
  maxLength?: number;
}
export const getRandomLengthString = ({
  minLength = 0,
  maxLength = 100,
}: RandomLengthString): string => {
  const length = getRandomNumber({ start: minLength, end: maxLength });
  const result = getRandomString({ length });
  return result;
};

export const getRandomColor = (): string => {
  const hexCode = new Array(16).fill(0).map((x, idx) => idx.toString(16));
  const colorStringLength = 6;
  const color = new Array(colorStringLength).fill(0).reduce((colorString) => {
    const hexIndex = Math.floor((Math.random() * 100) % hexCode.length);
    return colorString + hexCode[hexIndex];
  }, '');
  return `#${color}`;
};
