import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Template from '.';

export default {
  title: 'templates/TransactionCreate',
  component: Template,
};

export const TransactionCreate = () => {
  return (
    <ThemeProvider theme={theme}>
      <Template header={<div>header</div>} main={<div>main</div>} />
    </ThemeProvider>
  );
};
