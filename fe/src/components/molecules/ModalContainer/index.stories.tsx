import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import ModalContainer from '.';

export default {
  title: 'molecules/ModalContainer',
  component: ModalContainer,
  decorators: [withKnobs],
};

export const modalContainer = () => {
  const justify = select('justify', ['left', 'right', 'center'], 'center');
  const align = select('align', ['up', 'down', 'center'], 'center');
  return (
    <GlobalThemeProvider>
      <ModalContainer justify={justify} align={align}>
        <div>isModal</div>
      </ModalContainer>
    </GlobalThemeProvider>
  );
};
