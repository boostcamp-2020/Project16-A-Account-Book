import { makeAutoObservable, runInAction, toJS } from 'mobx';
import CategoryAPI from 'apis/category';
import { ICategory } from 'types';
import { TransactionStore } from '../Transaction';

export const categoryType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
};

export const CategoryStore = makeAutoObservable({
  categoryList: {
    expense: [],
    income: [],
  },

  getCategories(type: string): ICategory[] {
    const convertedType = categoryConverter(type);
    if (convertedType === categoryType.EXPENSE) {
      return toJS(this.categoryList.expense);
    }
    if (convertedType === categoryType.INCOME) {
      return toJS(this.categoryList.income);
    }
    return [];
  },

  async loadCategories() {
    const categories: any = await CategoryAPI.getCategories(
      TransactionStore.accountObjId,
    );
    runInAction(() => {
      this.categoryList.expense = categories.EXPENSE || [];
      this.categoryList.income = categories.INCOME || [];
    });
  },
});

const categoryConverter = (input: string): string => {
  switch (input) {
    case '지출':
    case categoryType.EXPENSE:
      return categoryType.EXPENSE;

    case '수입':
    case categoryType.INCOME:
      return categoryType.INCOME;

    default:
      return categoryType.EXPENSE;
  }
};
export default {};
