import React from 'react';
import DateRange from '.';
import GP from '../../../styles/GlobalThemeProvider';

export default {
  title: 'molecules/DateRange',
  component: DateRange,
};

export const dateRange = () => {
  const dummy = {
    startDate: new Date(),
    endDate: new Date(),
  };
  const onchange = () => {};
  return (
    <GP>
      <DateRange dates={dummy} onChange={onchange} />
    </GP>
  );
};
