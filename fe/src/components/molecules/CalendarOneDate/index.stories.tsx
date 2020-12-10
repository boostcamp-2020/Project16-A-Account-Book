import React from 'react';

import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalendarOneDate from '.';

export default {
  title: 'molecules / CalendarOneDate',
  component: CalendarOneDate,
};

export const Default = () => {
  const onClick = () => alert('calendar button clicked');
  return (
    <GlobalThemeProvider>
      <CalendarOneDate
        date={7}
        income={20000}
        expense={30000}
        onClick={onClick}
      />
    </GlobalThemeProvider>
  );
};

export const Empty = () => {
  const onClick = () => alert('calendar button clicked');
  return (
    <GlobalThemeProvider>
      <CalendarOneDate onClick={onClick} />
    </GlobalThemeProvider>
  );
};
