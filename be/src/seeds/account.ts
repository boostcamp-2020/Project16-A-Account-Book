import { AccountModel, IAccount } from '../models';

interface Prop {
  transactions: [String];
  methods: [String];
  categories: [String];
}
export const up = (accountList: Prop) => {
  return new Promise<[IAccount]>((resolve: any) => {
    AccountModel.create(accountList).then((accounts: IAccount) => {
      resolve(accounts);
    });
  });
};
export const down = async () => {
  await AccountModel.deleteMany({});
};
