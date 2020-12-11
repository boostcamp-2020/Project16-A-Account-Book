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
  imageUrl?: string;
};
export interface Account {
  accountList: Array<accountItem>;
  state: string;
  accountUpdateTitle: string;
  userObjIdList: string[];
}

const initialState: Account = {
  accountList: [],
  state: state.PENDING,
  accountUpdateTitle: '',
  userObjIdList: [],
};

export const AccountStore = makeAutoObservable({
  accountList: initialState.accountList,
  state: initialState.state,
  accountUpdateTitle: initialState.accountUpdateTitle,
  userObjIdList: initialState.userObjIdList,
  setAccountUpdateTitle(accountUpdateTitle: string) {
    this.accountUpdateTitle = accountUpdateTitle;
  },
  setUserObjIdList(newUserObjIdList: string[]) {
    this.userObjIdList = newUserObjIdList;
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
