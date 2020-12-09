import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';
import { MethodModel } from 'models/method';
import { NotVaildException } from 'models/account/static';
import { UserHasNoAccount } from 'libs/error';
import { IUserDocument } from 'models/user';

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
  const categories = await CategoryModel.createDefaultCategory();
  const methods = await MethodModel.createDefaultMethod();
  const newAccount = new AccountModel({
    title,
    ownerName: user.nickname,
    categories,
    methods,
    users: [user],
  });

  await Promise.all([newAccount.save()]);
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
