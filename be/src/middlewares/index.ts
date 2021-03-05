import Koa from 'koa';
import jwt from 'jsonwebtoken';
import { jwtConfig } from 'config';
import {
  unAuthroziedError,
  invalidAccessError,
  invalidCategory,
  accountHasNoUserError,
  updateUnclassifiedMethod,
  invaildMethod,
  invaildTitleLengthTitle,
  duplicatedValue,
  invalidForm,
  invalidPrice,
} from 'libs/error';

const models = require('models');

interface IDecodedData {
  id: string | number;
}

const PUT_METHOD = 'PUT';

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
    const user = await models.User.findOne({where:{id: decodedData.id}});

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
  const exist = models.User_Account.findOne({where:{userId:user.id,accountId:accountObjId}});
  
  return exist? true: false;
};

// export const isUnclassifide = async (
//   ctx: Koa.Context,
//   next: () => Promise<any>,
// ) => {
//   const { category } = ctx.params;
//   const cat = await CategoryModel.findById(category);
//   if (!cat || cat.type === categoryType.UNCLASSIFIED) {
//     throw invalidCategory;
//   }
//   await next();
// };

export const titleIsUnclassified = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { title } = ctx.request.body;
  if (!title || title.trim() === '미분류') throw updateUnclassifiedMethod;
  await next();
};

export const isVaildLengthTitle = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const { title } = ctx.request.body;
  if (!title) throw invaildMethod;
  const trimedTitle = title.trim();
  if (trimedTitle.length <= 0 || trimedTitle.length > 20)
    throw invaildTitleLengthTitle;
  ctx.request.body.title = trimedTitle;
  await next();
};

// export const isDuplicateAccountTitle = async (
//   ctx: Koa.Context,
//   next: () => Promise<any>,
// ) => {
//   const { title, user, ownerName } = ctx.request.body;
//   const put = ctx.method === PUT_METHOD;
//   const option = put
//     ? { title, ownerName, _id: { $ne: ctx.params.accountObjId } }
//     : {
//         title,
//         ownerName: user.nickname,
//       };
//   const result = await AccountModel.findOne(option);
//   if (result) throw duplicatedValue;

//   await next();
// };

export const isValidPrice = async (
  ctx: Koa.Context,
  next: () => Promise<any>,
) => {
  const TRILLION = 10 ** 12;
  const {
    transaction: { price },
  } = ctx.request.body;
  if (!price) {
    throw invalidForm;
  }
  if (price < 0 || price >= TRILLION) {
    throw invalidPrice;
  }
  await next();
};
