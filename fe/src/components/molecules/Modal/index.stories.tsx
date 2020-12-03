import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Modal from '.';

export default {
  title: 'Molecules / Modal',
};

const visible: boolean = true;

export const defaultModal = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modal visible={visible} content="default modal" />
    </ThemeProvider>
  );
};
