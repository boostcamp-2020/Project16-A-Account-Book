import React, { useState } from 'react';
import ChattingTemplate from 'components/templates/ChattingTemplate';
import Header from 'components/organisms/HeaderBar';
import ChattingArea from 'components/organisms/ChattingArea';
import NavBar from 'components/organisms/NavBar';
import { ChattingStore } from 'stores/Chatting';
import { TransactionStore } from 'stores/Transaction';
import { paymentList, solution } from 'utils/parseMMS';
import chattingAPI from 'apis/mms';

export interface ParsedSMS {
  cardname: string;
  amount: number;
  date: string;
  time: string;
  transactionType: string;
  cardType: string;
  isDeposit: Boolean;
}

const myMessage = 'mine';

const ChattingPage = () => {
  const [changedValue, setChangedValue] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChangedValue(e.target.value);
  };

  const mmsProcess = async (parsedMMS: ParsedSMS) => {
    const processedMMS = await chattingAPI.processChatting(
      TransactionStore.accountObjId,
      parsedMMS,
    );
    if (processedMMS.success) {
      ChattingStore.addChat('확인되었습니다.', 'server');
    } else {
      ChattingStore.addChat('실패했습니다', 'server');
    }
    setChangedValue('');
  };

  const onSubmitHandler = () => {
    ChattingStore.addChat(changedValue, myMessage);
    const parsedMMS = solution(changedValue);
    if (paymentList.indexOf(parsedMMS.cardname) > -1) mmsProcess(parsedMMS);
    else setChangedValue('');
  };

  const ChattingContent = (
    <ChattingArea
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      dataList={ChattingStore.getChattings()}
      chatValue={changedValue}
    />
  );
  return (
    <ChattingTemplate
      headerContent={<Header />}
      bodyContent={ChattingContent}
      bottomContent={<NavBar />}
    />
  );
};

export default ChattingPage;
