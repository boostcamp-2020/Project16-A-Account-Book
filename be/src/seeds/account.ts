import { AccountModel, Account } from '../models';

interface Prop {
  transactions: [String];
  methods: [String];
  categories: [String];
}
export const up = (accountList: Prop) => {
  return new Promise<[Account]>((resolve: any) => {
    AccountModel.create(accountList).then((accounts: Account) => {
      resolve(accounts);
    });
  });
};
export const down = async () => {
  await AccountModel.deleteMany({});
};
