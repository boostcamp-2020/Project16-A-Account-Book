import React from 'react';
import axios from 'axios';
import gitHubSVG from 'assets/svg/github.svg';
import { GithubButton, Wrap } from './style';

export interface Props {}

const onGithubLogin = async () => {
  const data = await axios.get('/user/auth/github');
  const url = data.data.githubAuthUrl;
  window.location.href = url;
};

export const GithubLogin = () => {
  return (
    <GithubButton size="lg" onClick={onGithubLogin}>
      <Wrap>
        <img src={gitHubSVG} width="14px" alt="github" />
        <div>GITHUB LOGIN</div>
      </Wrap>
    </GithubButton>
  );
};

export default GithubLogin;
