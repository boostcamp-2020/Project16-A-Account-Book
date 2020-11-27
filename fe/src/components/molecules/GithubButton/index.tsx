import React from 'react';
<<<<<<< HEAD
import gitHubSVG from 'assets/svg/github.svg';
import { GithubButton, Wrap } from './style';
import { getGithubUrl } from '../../../apis/urls/OAuth';
=======
import axios from 'axios';
import gitHubSVG from 'assets/svg/github.svg';
import { GithubButton, Wrap } from './style';
>>>>>>> e742afd6925c4c741be9d05bd2230847d26f2d1f

export interface Props {}

const onGithubLogin = async () => {
<<<<<<< HEAD
  const data = await getGithubUrl();
=======
  const data = await axios.get('http://localhost:4000/api/auth/github');
>>>>>>> e742afd6925c4c741be9d05bd2230847d26f2d1f
  const url = data.data.githubAuthUrl;
  window.location.href = url;
};

<<<<<<< HEAD
const GithubLogin = () => {
=======
export const GithubLogin = () => {
>>>>>>> e742afd6925c4c741be9d05bd2230847d26f2d1f
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
