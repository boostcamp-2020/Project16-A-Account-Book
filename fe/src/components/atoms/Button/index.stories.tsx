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

export const Test = Template.bind({});
Test.args = {
  size: 'sm',
  title: 'hello',
};

export const defaultButton = () => {
  const title = 'default Button';
  return (
    <Button
      onClick={() => {
        alert(title);
      }}
      title={title}
    />
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
      title={title}
    />
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
      title={title}
    />
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
      title={title}
    />
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
      title={title}
    />
  );
};
