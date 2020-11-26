import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react/types-6-0';
import Button, { Props } from '.';

const naverSVG = require('assets/svg/naver.svg');

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Test = Template.bind({});
Test.args = {
  size: 'sm',
  children: 'default',
};

export const defaultButton = () => {
  const title = 'default Button';
  return (
    <Button
      onClick={() => {
        alert(title);
      }}
    >
      {title}
    </Button>
  );
};

export const smButton = () => {
  const title = 'sm Button';
  return (
    <Button
      size="sm"
      onClick={() => {
        alert(title);
      }}
    >
      {title}
    </Button>
  );
};

export const mdButton = () => {
  const title = 'md Button';
  return (
    <Button
      size="md"
      onClick={() => {
        alert(title);
      }}
    >
      {title}
    </Button>
  );
};

export const lgButton = () => {
  const title = 'lg Button';
  return (
    <Button
      size="lg"
      onClick={() => {
        alert(title);
      }}
    >
      {title}
    </Button>
  );
};

export const xlButton = () => {
  const title = 'xl Button';
  return (
    <Button
      size="xl"
      onClick={() => {
        alert(title);
      }}
    >
      {title}
    </Button>
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
  );
};
