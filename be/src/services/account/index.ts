import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';
import { MethodModel } from 'models/method';
import { NotVaildException } from 'models/account/static';
import { UserHasNoAccount, accountNoChange } from 'libs/error';
import { IUserDocument, UserModel } from 'models/user';
import { Types } from 'mongoose';

export const getAccountsByUserId = async (userId: string) => {
  const res = await AccountModel.findAccountByUserId(userId);

  if (!res) throw UserHasNoAccount;
  return res;
};

export const getAccountByTitleAndOwner = async (
  title: string,
  owner: string,
) => {
  const account = await AccountModel.findByTitleAndOwner(title, owner);

  if (!account) throw new NotVaildException();
  return account;
};

export const addAccountByUserAndAccountInfo = async (
  user: IUserDocument,
  title: any,
  userObjIdList: String[],
) => {
  const rawUserList = userObjIdList.map(async (userObjId: String) => {
    return UserModel.findById(userObjId);
  });
  const userList = await Promise.all(rawUserList);
  const categories = await CategoryModel.createDefaultCategory();
  const methods = await MethodModel.createDefaultMethod();
  const newAccount = new AccountModel({
    title,
    ownerName: user.nickname,
    categories,
    methods,
    users: [...userList],
  });

  await Promise.all([newAccount.save()]);
};

export const updateAccountByUserAndAccountInfo = async (
  title: any,
  accountObjId: String,
  userObjIdList: String[],
) => {
  const rawUserList = userObjIdList.map(async (userObjId: String) => {
    return UserModel.findById(userObjId);
  });
  const userList = await Promise.all(rawUserList);

  const updateAccount = await AccountModel.findOneAndUpdate(
    { _id: accountObjId },
    {
      title,
      users: [...userList] as Types.DocumentArray<IUserDocument>,
    },
  );

  if (!updateAccount) {
    throw accountNoChange;
  }
};

export const deleteAccountByAccountInfo = async (accountObjId: String) => {
  const deleteAccount = await AccountModel.findOneAndDelete({
    _id: accountObjId,
  });

  if (!deleteAccount) {
    throw accountNoChange;
  }
};

export const addUserInAccount = async (
  accountObjId: string,
  userObjId: string,
) => {
  const result = await AccountModel.findByPkAndPushUser(
    userObjId,
    accountObjId,
  );

  if (result.ok && result.nModified === 0) {
    return { success: true, message: '중복된 유저 입력' };
  }
  if (result.ok) {
    return { success: true, message: '정상적으로 유저 추가' };
  }
  return { success: false, message: result };
};

export default {};
