import { makeAutoObservable, runInAction } from 'mobx';
import CategoryAPI from 'apis/category';
import { TransactionStore } from '../Transaction';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

export const CategoryStore = makeAutoObservable({
  categoryList: [],

  async loadCategories() {
    const categories: any = await CategoryAPI.getCategories(
      TransactionStore.accountObjId,
    );
    runInAction(() => {
      this.categoryList = categories;
    });
  },
});

export default {};
