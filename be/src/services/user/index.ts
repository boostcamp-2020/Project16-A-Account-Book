import { AccountModel } from 'models/account';

export const titleByAccountId = async (accountId: String) => {
  const account = await AccountModel.findOne(
    { _id: accountId },
    { _id: false, title: true },
  ).exec();

  return account;
};

export default titleByAccountId;
