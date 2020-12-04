import React from 'react';
import gitHubSVG from 'assets/svg/github.svg';
import api from 'apis/oauth';
import { GithubButton, Wrap } from './style';

export interface Props {}

const onGithubLogin = async () => {
  const result = await api.getGitHubOAuth();
  const url = result.githubAuthUrl;
  window.location.href = url;
};

const GithubLogin = () => {
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
