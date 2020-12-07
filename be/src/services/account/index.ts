import { AccountModel } from 'models/account';
import { NotVaildException } from 'models/account/static';

export const getAccounts = async () => {
  const res = await AccountModel.find().select('_id title owner').exec();
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
