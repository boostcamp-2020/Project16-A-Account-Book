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

const localLoginSize = {
  width: 3.8,
  height: 1.2,
  fontSize: 0.6,
};

export const Login = () => {
  const title = '로그인';
  return (
    <Button
      title={title}
      bgColor="#20c997"
      color="#ffffff"
      width={localLoginSize.width}
      height={localLoginSize.height}
      fontSize={localLoginSize.fontSize}
    />
  );
};

export const Signup = () => {
  const title = '회원가입';
  return (
    <Button
      title={title}
      bgColor="#ffffff"
      color="#20c997"
      width={localLoginSize.width}
      height={localLoginSize.height}
      fontSize={localLoginSize.fontSize}
      border="1px solid #20c997"
    />
  );
};

const oauthLoginSize = {
  width: 7.1,
  height: 2,
  fontSize: 1,
};

export const NaverLogin = () => {
  const title = 'Naver Login';
  return (
    <Button
      title={title}
      bgColor="#19ce60"
      color="#ffffff"
      width={oauthLoginSize.width}
      height={oauthLoginSize.height}
      fontSize={oauthLoginSize.fontSize}
    />
  );
};

export const GitHubLogin = () => {
  const title = 'GitHub Login';
  return (
    <Button
      title={title}
      bgColor="#080909"
      color="#ffffff"
      width={oauthLoginSize.width}
      height={oauthLoginSize.height}
      fontSize={oauthLoginSize.fontSize}
    />
  );
};
