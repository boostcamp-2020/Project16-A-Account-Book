/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import querystring from 'querystring';
import { getFrontUrl, jwtConfig, githubConfig } from 'config';
import URL from 'apis/urls';
import { getRandomColor } from 'libs/random';

const models = require('models');

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

export const createDefaultCategory = async (accountId: any) => {
  const expense = [
    '식비',
    '생활',
    '온라인쇼핑',
    '패션',
    '뷰티/미용',
    '교통',
    '의료/건강',
    '금융',
    '문화/여가',
    '교육/학습',
    '반려동물',
    '기타지출',
  ];
  const income = ['급여', '용돈', '금융수입', '사업수입', '기타수입'];

  expense.forEach(async (title) => {
    const color = getRandomColor();
    await models.Category.create({
      type: 'EXPENSE',
      title,
      color,
      accountId,
    });
  });

  income.forEach(async (title) => {
    const color = getRandomColor();
    await models.Category.create({
      type: 'INCOME',
      title,
      color,
      accountId,
    });
  });

  await models.Category.create({
    title: '미분류',
    color: '#000000',
    type: 'UNCLASSIFIED',
    accountId,
  });
};

export const createDefaultMethod = async (accountId: any) => {
  const titles = ['현금', '카드', '미분류'];
  titles.forEach(async (title) => {
    await models.Method.create({
      title,
      accountId,
    });
  });
};

export const getGithubAccessToken = async (code: string) => {
  const {
    data: { access_token: accessToken },
  } = await getAccessTokenFromGitHub(code);
  const { data: profile } = await getUserProfile(accessToken);
  const { id, login, avatar_url: avatarUrl } = profile;

  let user = await models.User.findOne({ where: { id } });

  if (!user) {
    user = await models.User.create({
      id,
      password: id + login,
      salt: id + login,
      nickName: login,
      profileUrl: avatarUrl,
    });

    const newAccount = await models.Account.create({
      title: login,
      ownerName: login,
    });

    await createDefaultCategory(newAccount.id);
    await createDefaultMethod(newAccount.id);
    await user.addAccount(newAccount, { through: 'User_Account' });
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
