const asciiA = 97;
export const getRandomNumber = ({
  start,
  end,
}: {
  start: number;
  end: number;
}): number => Math.floor(Math.random() * end + start);

export const getRandomString = ({ length = 5 }: { length: number }): string => {
  const reducer = (string: string): string => {
    const randomV = getRandomNumber({ start: 0, end: 26 });
    return string + String.fromCharCode(asciiA + randomV);
  };
  return Array(length).fill(0).reduce(reducer, '');
};

export const getRandomDate = (): Date => {
  const baseDate = new Date('2020-01-01 00:00:00').getTime();
  const yearToMillisecond = 3.154e10;
  const randomMilliscond = getRandomNumber({
    start: 0,
    end: yearToMillisecond,
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
