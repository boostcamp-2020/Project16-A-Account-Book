import { AccountModel } from 'models/account';
import { NotVaildException } from 'models/account/static';

export const getAccounts = async (accounts: Array<string>) => {
  const res = await AccountModel.findByPkList(accounts);
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
