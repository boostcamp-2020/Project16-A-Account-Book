import { AccountModel } from 'models/account';
import { UserModel } from 'models/user';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export const getUserList = async () => {
  const allUserList = await UserModel.find({}).exec();
  return allUserList;
};
