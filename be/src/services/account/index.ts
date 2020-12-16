import { AccountModel } from 'models/account';
import { CategoryModel } from 'models/category';
import { MethodModel } from 'models/method';
import { NotVaildException } from 'models/account/static';
import { UserHasNoAccount, accountNoChange } from 'libs/error';
import { IUserDocument, UserModel } from 'models/user';

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

const inviteUserList = (
  host: String,
  accountObjId: string,
  userObjIdList: string[],
) => {
  return UserModel.updateMany(
    {
      _id: { $in: userObjIdList },
      'invitations.accounts': { $ne: accountObjId },
    },
    {
      $addToSet: {
        invitations: {
          host,
          accounts: accountObjId,
        },
      },
    },
  );
};

export const createNewAccount = async (
  user: IUserDocument,
  title: any,
  userObjIdList: string[],
) => {
  const [categories, methods] = await Promise.all([
    CategoryModel.createDefaultCategory(),
    MethodModel.createDefaultMethod(),
  ]);

  const newAccount = new AccountModel({
    title,
    ownerName: user.nickname,
    categories,
    methods,
    users: [user],
    imageUrl: user.profileUrl,
  });
  const inviteUsers = inviteUserList(
    user.nickname,
    newAccount._id,
    userObjIdList,
  );
  return Promise.all([newAccount.save(), inviteUsers]);
};

export const updateAccountByUserAndAccountInfo = async (
  title: any,
  accountObjId: string,
  userObjIdList: string[],
  user: IUserDocument,
) => {
  const inviteUsers = inviteUserList(
    user.nickname,
    accountObjId,
    userObjIdList,
  );
  const updateAccount = AccountModel.updateOne(
    { _id: accountObjId },
    {
      title,
    },
  );

  return Promise.all([updateAccount, inviteUsers]);
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

export const deleteUserInAccount = async (
  accountObjId: string,
  userObjId: string,
) => {
  const result = await AccountModel.findOneAndDeleteUser(
    accountObjId,
    userObjId,
  );
  if (!result) {
    return { success: false, message: '삭제 실패' };
  }
  return { success: true, message: '삭제 성공' };
};

export default {};
