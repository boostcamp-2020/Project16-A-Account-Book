import React, { useState } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
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

const defaultMMS = {
  cardname: '',
  amount: 0,
  date: '',
  time: '',
  transactionType: '',
  cardType: '',
  isDeposit: false,
};

const myMessage = 'mine';

const ChattingPage = () => {
  const [changedValue, setChangedValue] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const [parsedMMS, setParsedMMS] = useState<ParsedSMS>(defaultMMS);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChangedValue(e.target.value);
  };

  const mmsProcess = async () => {
    const client = changedValue;
    const processedMMS = await chattingAPI.processChatting(
      TransactionStore.accountObjId,
      parsedMMS,
      client,
    );
    if (processedMMS.success) {
      ChattingStore.addChat('확인되었습니다.', 'server');
    } else {
      ChattingStore.addChat('실패했습니다', 'server');
    }
    setProcessing(false);
    setParsedMMS(defaultMMS);
    setChangedValue('');
  };

  const onSubmitHandler = () => {
    ChattingStore.addChat(changedValue, myMessage);
    if (!processing) {
      const parsedMms = solution(changedValue);
      if (paymentList.indexOf(parsedMms.cardname) > -1) {
        setProcessing(true);
        setParsedMMS(parsedMms);
        ChattingStore.addChat('사용처를 입력해주세요.', 'server');
        setChangedValue('');
      } else setChangedValue('');
    } else {
      mmsProcess();
    }
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
    <MainTemplate
      HeaderBar={<Header />}
      SubHeaderBar={<div />}
      Contents={ChattingContent}
      NavBar={<NavBar />}
    />
  );
};

export default ChattingPage;
