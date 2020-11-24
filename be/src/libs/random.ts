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
