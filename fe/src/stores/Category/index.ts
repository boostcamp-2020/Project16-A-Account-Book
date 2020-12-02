import { makeAutoObservable, runInAction } from 'mobx';
import CategoryAPI from 'apis/category';

export const CategoryStore = makeAutoObservable({
  type: 'EXPENSE',
  dataList: [],
  accountObjId: 'init',

  setDataList(dataSet: any) {
    this.dataList = dataSet[this.type];
  },
  setType(type: string) {
    this.type = type;
  },

  async loadCategories() {
    const categories: any = await CategoryAPI.getCategories(this.accountObjId);
    runInAction(() => {
      this.dataList = categories[this.type];
    });
  },
});

export default {};
