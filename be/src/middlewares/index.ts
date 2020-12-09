import Koa from 'koa';
import jwt from 'jsonwebtoken';
import { jwtConfig } from 'config';
import {
  unAuthroziedError,
  invalidAccessError,
  invalidCategory,
} from 'libs/error';
import { UserModel } from 'models/user';
import { CategoryModel, categoryType } from 'models/category';

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
  const userHasAccountId = user.accounts.some(
    (account: object) => String(account) === accountObjId,
  );
  if (!userHasAccountId) {
    throw invalidAccessError;
  }
  await next();
};

export const isUnclassifide = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { category } = ctx.query;
  const cat = await CategoryModel.findById(category);
  if (!cat || cat.type === categoryType.UNCLASSIFIED) {
    throw invalidCategory;
  }
  await next();
};
