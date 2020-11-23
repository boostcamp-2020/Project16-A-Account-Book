import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import AccountDate from '.';

export default {
  title: 'organisms/AccountDate',
  component: AccountDate,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
};

export const AccountDateSample = () => {
  const date = new Date();

  return (
    <ThemeProvider theme={theme}>
      <AccountDate date={date} />
    </ThemeProvider>
  );
};
