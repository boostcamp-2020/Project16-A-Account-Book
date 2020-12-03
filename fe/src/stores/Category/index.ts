import { makeAutoObservable, runInAction } from 'mobx';
import CategoryAPI from 'apis/category';
import { TransactionStore } from '../Transaction';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

export const CategoryStore = makeAutoObservable({
  accountObjId: '',
  categoryList: {
    INCOME: [],
    EXPENSE: [],
  },

  getCategories(type: string) {
    if (type === categoryType.INCOME) return this.categoryList.INCOME;
    if (type === categoryType.EXPENSE) return this.categoryList.EXPENSE;
    return [];
  },

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
