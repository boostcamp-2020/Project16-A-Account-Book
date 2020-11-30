import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import MainFilterForm from '.';

export default {
  title: 'organisms/MianFilterForm',
  component: MainFilterForm,
};

export const mainFilterForm = () => {
  return (
    <GlobalThemeProvider>
      <MainFilterForm />
    </GlobalThemeProvider>
  );
};
