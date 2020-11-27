const getOneMonthRange = (year: string, month: string) => {
  if (month === '12') {
    return {
      start: `${year}-${month}`,
      end: `${Number(year) + 1}-${1}`,
    };
  }
  return {
    start: `${year}-${month}`,
    end: `${year}-${Number(month) + 1}`,
  };
};

export default getOneMonthRange;
