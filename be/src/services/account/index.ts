import { AccountModel } from 'models/account';

export const getAccounts = async () => {
  const res = await AccountModel.find().select('_id title').exec();
  return res;
};

export default {};
