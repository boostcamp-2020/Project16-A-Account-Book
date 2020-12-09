import { makeAutoObservable, toJS } from 'mobx';
import { DataProps } from 'components/molecules/ChattingBox';
// import { TransactionStore } from '../Transaction';

const chattingList: DataProps[] = [];

export const ChattingStore = makeAutoObservable({
  getChattings(): DataProps[] {
    return toJS(chattingList);
  },

  addChat(chat: string, type: string) {
    const chatObj = {
      type,
      chat,
    };
    chattingList.push(chatObj);
  },
});

export default {};
