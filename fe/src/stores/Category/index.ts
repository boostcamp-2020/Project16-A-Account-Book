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
    if (type === categoryType.INCOME)
      return this.categoryList.INCOME.map((category: any) => category.title);
    if (type === categoryType.EXPENSE)
      return this.categoryList.EXPENSE.map((category: any) => category.title);
    return [];
  },

  async loadCategories() {
    const categories: any = await CategoryAPI.getCategories(
      TransactionStore.accountObjId,
    );
    runInAction(() => {
      if (categories.EXPENSE) {
        this.categoryList.EXPENSE = categories.EXPENSE;
      }
      if (categories.INCOME) {
        this.categoryList.INCOME = categories.INCOME;
      }
    });
  },
});

export default {};
