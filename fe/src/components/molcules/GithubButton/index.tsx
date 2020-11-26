import React from 'react';
import axios from 'axios';
import gitHubSVG from 'assets/svg/github.svg';
import { GithubButton, Wrap } from './style';

export interface Props {}

const onGithubLogin = async () => {
  const data = await axios.get('http://localhost:4000/api/auth/github');
  const url = data.data.githubAuthUrl;
  window.location.href = url;
};

export const GithubLogin = () => {
  return (
    <GithubButton size="xl" onClick={onGithubLogin}>
      <Wrap>
        <img src={gitHubSVG} width="24px" alt="github" />
        <div>GITHUB LOGIN</div>
      </Wrap>
    </GithubButton>
  );
};

export default GithubLogin;
