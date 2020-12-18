import { makeAutoObservable, toJS } from 'mobx';
import { DataProps } from 'components/molecules/ChattingBox';

export const ChattingStore = makeAutoObservable({
  chattingList: [] as DataProps[],
  getChattings(): DataProps[] {
    return toJS(this.chattingList);
  },

  resetChattings() {
    this.chattingList = [];
  },

  addChat(chat: string, type: string) {
    const chatObj = {
      type,
      chat,
    };
    this.chattingList.push(chatObj);
  },
});

export default {};
