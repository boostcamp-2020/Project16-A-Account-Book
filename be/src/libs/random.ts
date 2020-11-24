const asciiA = 97;
export const randomNumber = ({
  start,
  end,
}: {
  start: number;
  end: number;
}): number => Math.floor(Math.random() * end + start);

export const randomString = ({ length = 5 }: { length: number }): string => {
  const reducer = (string: string): string => {
    const randomV = randomNumber({ start: 0, end: 26 });
    return string + String.fromCharCode(asciiA + randomV);
  };
  return Array(length).fill(0).reduce(reducer, '');
};

export const randomDate = (): Date => {
  const baseDate = new Date('2020-01-01 00:00:00').getTime();
  const yearToMillisecond = 3.154e10;
  const randomMilliscond = randomNumber({ start: 0, end: yearToMillisecond });
  return new Date(baseDate + randomMilliscond);
};
interface RandomLengthString {
  minLength?: number;
  maxLength?: number;
}
export const randomLengthString = ({
  minLength = 0,
  maxLength = 100,
}: RandomLengthString): string => {
  const length = randomNumber({ start: minLength, end: maxLength });
  const result = randomString({ length });
  return result;
};
