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
  accountUpdateTitle: string;
}

const initialState: Account = {
  accountList: [],
  state: state.PENDING,
  accountUpdateTitle: '',
};

export const AccountStore = makeAutoObservable({
  accountList: initialState.accountList,
  state: initialState.state,
  accountUpdateTitle: initialState.accountUpdateTitle,
  setAccountUpdateTitle(accountUpdateTitle: string) {
    this.accountUpdateTitle = accountUpdateTitle;
  },
  getAccountList() {
    return toJS(this.accountList);
  },
  async loadAccounts() {
    this.state = state.PENDING;
    try {
      const result = await accountAPI.getAccount();
      runInAction(() => {
        this.accountList = result as any;
        this.state = state.DONE;
      });
    } catch (err) {
      runInAction(() => {
        this.state = state.ERROR;
      });
    }
  },
});

export default {};
