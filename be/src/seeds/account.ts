import { AccountModel, IAccountDocument } from 'models/account';

interface Prop {
  transactions: string[];
  methods: string[];
  categories: string[];
}

export const up = (accountList: Prop) => {
  return new Promise<IAccountDocument[]>((resolve: any) => {
    AccountModel.create(accountList).then((accounts: IAccountDocument) => {
      resolve(accounts);
    });
  });
};
export const down = async () => {
  await AccountModel.deleteMany({});
};
