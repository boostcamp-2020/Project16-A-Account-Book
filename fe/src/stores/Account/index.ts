import { makeAutoObservable, runInAction, toJS } from 'mobx';
import accountAPI from 'apis/account';

const state = {
  PENDING: 'PENDING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export const AccountStore = makeAutoObservable({
  accountList: [{ _id: 'temp', title: 'test' }],
  state: state.PENDING,
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
