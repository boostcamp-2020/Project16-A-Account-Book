import { makeAutoObservable, runInAction, toJS } from 'mobx';
import accountAPI from 'apis/account';

const state = {
  PENDING: 'PENDING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};
type accountItem = {
  _id: string;
  title: string;
  ownerName: string;
};
export interface Account {
  accountList: Array<accountItem>;
  state: string;
}

const initialState: Account = {
  accountList: [],
  state: state.PENDING,
};
export const AccountStore = makeAutoObservable({
  accountList: initialState.accountList,
  state: initialState.state,
  getAccountList() {
    return toJS(this.accountList);
  },
  async loadTransactions() {
    this.state = state.PENDING;
    try {
      const result = await accountAPI.getAccount();
      runInAction(() => {
        this.accountList = result as any;
      });
    } catch (err) {
      runInAction(() => {
        this.state = state.ERROR;
      });
    }
  },
});

export default {};
