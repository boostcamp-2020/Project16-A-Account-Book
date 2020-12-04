import React, { useState } from 'react';

import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import DatePicker from '.';

export default {
  title: 'molecules/DatePicker',
  component: DatePicker,
};
export interface IDatePicker {
  dates: {
    startDate: Date;
    endDate: Date | null;
  };
  onChange: any;
}
export const datePicker = () => {
  const [dates, setDates] = useState<{
    startDate: Date;
    endDate: Date | null;
  }>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const onChnage = (date: [Date, Date]) => {
    setDates({ startDate: date[0], endDate: date[1] });
  };
  return (
    <GlobalThemeProvider>
      <DatePicker dates={dates} onChange={onChnage} />
    </GlobalThemeProvider>
  );
};
