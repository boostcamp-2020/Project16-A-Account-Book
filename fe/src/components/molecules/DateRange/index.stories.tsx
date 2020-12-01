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
  return (
    <GP>
      <DateRange dates={dummy} />
    </GP>
  );
};
