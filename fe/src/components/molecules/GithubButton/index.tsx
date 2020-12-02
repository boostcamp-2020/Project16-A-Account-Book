import React from 'react';
import gitHubSVG from 'assets/svg/github.svg';
import { getGithubUrl } from 'apis/OAuth';
import { GithubButton, Wrap } from './style';

export interface Props {}

const onGithubLogin = async () => {
  const data = await getGithubUrl();
  const url = data.data.githubAuthUrl;
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
