import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button, { Props } from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  title: 'hello',
};

export const HELLO = () => {
  const subTitle = 'HELLO';
  return <Button title={subTitle} />;
};

export const BYE = () => {
  const subTitle = 'BYE';
  return <Button title={subTitle} />;
};
