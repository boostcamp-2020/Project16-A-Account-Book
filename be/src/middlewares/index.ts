import Koa from 'koa';
import jwt from 'jsonwebtoken';
import { jwtConfig } from 'config';
import {
  unAuthroziedError,
  invalidAccessError,
  invalidCategory,
  accountHasNoUserError,
  updateUnclassifiedMethod,
} from 'libs/error';
import { UserModel } from 'models/user';
import { CategoryModel, categoryType } from 'models/category';
import { AccountModel } from 'models/account';

interface IDecodedData {
  id: string | number;
}

export const authorization = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  try {
    const key = 'access_token';
    const accessToken = ctx.cookies.get(key);

    if (!accessToken) {
      throw unAuthroziedError;
    }
    const decodedData = jwt.verify(
      accessToken,
      jwtConfig.jwtSecret,
    ) as IDecodedData;
    const user = await UserModel.findOne({ id: decodedData.id });
    if (!user) {
      throw unAuthroziedError;
    }
    ctx.request.body.user = user;
  } catch (e) {
    throw unAuthroziedError;
  }

  await next();
};

export const verifyAccountAccess = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { accountObjId } = ctx.params;
  const { user } = ctx.request.body;
  if (!user) {
    throw unAuthroziedError;
  }
  const selectedAccount = await AccountModel.findById(accountObjId);
  if (!selectedAccount) {
    throw accountHasNoUserError;
  }
  const accountHasUserId = selectedAccount.users.some((el: any) => {
    return String(el._id) === String(user._id);
  });

  if (!accountHasUserId) {
    throw invalidAccessError;
  }
  await next();
};

export const isUnclassifide = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { category } = ctx.params;
  const cat = await CategoryModel.findById(category);
  if (!cat || cat.type === categoryType.UNCLASSIFIED) {
    throw invalidCategory;
  }
  await next();
};

export const titleIsUnclassified = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { title } = ctx.request.body;
  if (!title || title.trim() === '' || title.trim() === '미분류')
    throw updateUnclassifiedMethod;
  await next();
};
