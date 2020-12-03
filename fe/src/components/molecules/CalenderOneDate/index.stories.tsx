import React from 'react';

import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CalenderOneDate from '.';

export default {
  title: 'molecules / CalenderOneDate',
  component: CalenderOneDate,
};

export const Default = () => {
  const onClick = () => alert('calender button clicked');
  return (
    <GlobalThemeProvider>
      <CalenderOneDate
        date={7}
        income={20000}
        expense={30000}
        onClick={onClick}
      />
    </GlobalThemeProvider>
  );
};

export const Empty = () => {
  const onClick = () => alert('calender button clicked');
  return (
    <GlobalThemeProvider>
      <CalenderOneDate onClick={onClick} />
    </GlobalThemeProvider>
  );
};
