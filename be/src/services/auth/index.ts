import axios from 'axios';
import jwt from 'jsonwebtoken';
import randomstring from 'randomstring';
import querystring from 'querystring';
import { UserModel } from 'models/user';
import { AccountModel } from 'models/account';
import { Types } from 'mongoose';
import * as Config from 'config';
import URL from 'apis/urls';

export const getGithubURL = async () => {
  const state = randomstring.generate();
  const url = URL.github;
  const query = querystring.stringify({
    client_id: process.env.GITHUB_ID,
    redirect_uri: `${Config.getFrontUrl()}${URL.gitCallback}`,
    state,
    scope: 'user:email',
  });
  return url + query;
};

export const getGithubAccessToken = async (code: string) => {
  const gitResponse = await axios.post(
    URL.gitAccessToken,
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
  const USER_PROFILE_URL = URL.gitUser;
  const data = await axios.get(USER_PROFILE_URL, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
  const profile = data.data;
  const user = await UserModel.findOne({ id: `${profile.id}` }).exec();
  if (user == null) {
    const newAccount = new AccountModel({
      title: 'firstAccount',
    });
    await newAccount.save();
    const accountObjId = Types.ObjectId(newAccount.id);
    const newUser = new UserModel({
      id: profile.id,
      accounts: [accountObjId],
    });
    await newUser.save();
    const token = jwt.sign(profile.id, Config.jwtString);
    return { token, user: newUser };
  }
  const token = jwt.sign(profile.id, Config.jwtString);
  return { token, user };
};
