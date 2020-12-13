import React, { useState } from 'react';

import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import DatePicker from '.';

export default {
  title: 'atoms/DatePicker',
  component: DatePicker,
};

export const datePicker = () => {
  const [date, setDates] = useState<Date>(new Date());
  const onChnage = (d: Date) => {
    setDates(d);
  };
  return (
    <GlobalThemeProvider>
      <DatePicker date={date} onChange={onChnage} />
    </GlobalThemeProvider>
  );
};
