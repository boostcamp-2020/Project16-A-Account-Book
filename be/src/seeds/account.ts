import { AccountModel, IAccountDocument, IAccount } from 'models/account';

export const up = (accountList: IAccount) => {
  return new Promise<IAccountDocument[]>((resolve: any) => {
    AccountModel.create(accountList).then((accounts: IAccountDocument) => {
      resolve(accounts);
    });
  });
};
export const down = async () => {
  await AccountModel.deleteMany({});
};
