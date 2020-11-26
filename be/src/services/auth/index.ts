import axios from 'axios';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import querystring from 'querystring';
import { UserModel } from '../../models/user';
import * as Config from '../../config';

export const getGithubURL = async () => {
  const state = randomstring.generate();
  const url = 'https://github.com/login/oauth/authorize?';
  const query = await querystring.stringify({
    client_id: process.env.GITHUB_ID,
    redirect_uri: 'http://localhost:4000/api/auth/github/callback',
    state,
    scope: 'user:email',
  });
  return url + query;
};

export const getGithubAccessToken = async (code: string) => {
  const gitResponse = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id: process.env.GITHUB_ID,
      client_secret: process.env.GITHUB_SECRET,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
  const accessToken = gitResponse.data.access_token;
  const USER_PROFILE_URL = 'https://api.github.com/user';
  const data = await axios.get(USER_PROFILE_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const profile = data.data;
  const user = await UserModel.findOne({ where: { id: profile.id } });
  if (user == null) {
    const newUser = new UserModel({
      id: profile.id,
    });
    await newUser.save();
  }
  const token = jwt.sign(profile.id, Config.jwtString);
  return token;
};
