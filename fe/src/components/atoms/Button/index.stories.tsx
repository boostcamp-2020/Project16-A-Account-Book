import React from 'react';
import styled from 'styled-components';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { withKnobs, select } from '@storybook/addon-knobs';

import naverSVG from 'assets/svg/naver.svg';
import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [withKnobs],
};

export const Buttons = () => {
  const size = select('size', ['sm', 'lg', 'md', 'xl'], 'md');
  const title = 'title';
  return (
    <GlobalThemeProvider>
      <Button
        size={size}
        onClick={() => {
          alert(title);
        }}
      >
        {title}
      </Button>
    </GlobalThemeProvider>
  );
};

const NaverButton = styled(Button)`
  background-color: green;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.4rem;
`;

export const NaverLogin = () => {
  return (
    <GlobalThemeProvider>
      <NaverButton
        size="lg"
        onClick={() => {
          alert('NAVER LOGIN~!');
        }}
      >
        <Wrap>
          <img src={naverSVG} width="14px" alt="naver" />
          <div>NAVER LOGIN</div>
        </Wrap>
      </NaverButton>
    </GlobalThemeProvider>
  );
};
