import { AccountModel } from 'models/account';
import { NotVaildException } from 'models/account/static';
import { UserModel } from 'models/user';

export const getAccounts = async (accounts: Array<string>) => {
  return AccountModel.find(accounts);
};

export const getAccountsByUserId = async (userId: string) => {
  const res = UserModel.findById(userId, { account: true }).populate({
    path: 'accounts',
    select: '_id title owner',
  });
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
export default {};
