import { makeAutoObservable } from 'mobx';

export const CategoryStore = makeAutoObservable({
  type: 'expense',
  dataList: [],

  setDataList(dataSet: any) {
    this.dataList = dataSet[this.type];
  },
  setType(type: string) {
    this.type = type;
  },

  async loadCategories() {
    console.log('get DB Data');
  },
});

export default {};
