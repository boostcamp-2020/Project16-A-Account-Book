/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import querystring from 'querystring';
import { UserModel } from 'models/user';
import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';
import { MethodModel } from 'models/method';
import { getFrontUrl, jwtConfig, githubConfig } from 'config';
import URL from 'apis/urls';

function getAccessTokenFromGitHub(code: string) {
  return axios.post(
    URL.gitAccessToken,
    {
      code,
      client_id: githubConfig.githubId,
      client_secret: githubConfig.githubSecret,
    },
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
}

function getUserProfile(accessToken: string) {
  return axios.get(URL.gitUser, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
}

export const getGithubURL = async () => {
  const state = randomstring.generate();
  const url = URL.github;
  const query = querystring.stringify({
    client_id: githubConfig.githubId,
    redirect_uri: `${getFrontUrl()}${URL.gitCallback}`,
    state,
    scope: 'user:email',
  });
  return url + query;
};

export const getGithubAccessToken = async (code: string) => {
  const {
    data: { access_token: accessToken },
  } = await getAccessTokenFromGitHub(code);
  const { data: profile } = await getUserProfile(accessToken);
  const { id, login, avatar_url: avatarUrl } = profile;

  let user = await UserModel.findOne({ id }).exec();
  if (!user) {
    const categories = await CategoryModel.createDefaultCategory();
    const methods = await MethodModel.createDefaultMethod();
    user = new UserModel({
      id,
      nickname: login,
      profileUrl: avatarUrl,
    });
    const newAccount = new AccountModel({
      title: login,
      ownerName: login,
      categories,
      methods,
      users: [user],
      imageUrl:
        'https://kr.object.ncloudstorage.com/account/abstract-user-flat-4.svg',
    });

    await Promise.all([newAccount.save(), user.save()]);
  }
  const token = jwt.sign(
    {
      id,
    },
    jwtConfig.jwtSecret,
    { expiresIn: jwtConfig.jwtExpires },
  );
  return { token, user };
};
