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
  title: 'hello',
};

export const Login = () => {
  const title = '로그인';
  return (
    <Button
      types="localLogin"
      onClick={() => {
        alert(title);
      }}
      title={title}
      bgColor="#20c997"
      color="#ffffff"
    />
  );
};

export const Signup = () => {
  const title = '회원가입';
  return (
    <Button
      types="localLogin"
      border="1px solid #20c997"
      onClick={() => {
        alert(title);
      }}
      title={title}
      bgColor="#ffffff"
      color="#20c997"
    />
  );
};

export const NaverLogin = () => {
  const title = 'Naver Login';
  return (
    <Button
      types="OAuthLogin"
      onClick={() => {
        alert(title);
      }}
      title={title}
      bgColor="#19ce60"
      color="#ffffff"
    />
  );
};

export const GitHubLogin = () => {
  const title = 'GitHub Login';
  return (
    <Button
      types="OAuthLogin"
      onClick={() => {
        alert(title);
      }}
      title={title}
      bgColor="#080909"
      color="#ffffff"
    />
  );
};
