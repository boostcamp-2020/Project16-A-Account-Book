import React, { useState, useRef, useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import ChattingArea from 'components/organisms/ChattingArea';
import NavBar from 'components/organisms/NavBar';
import { ChattingStore } from 'stores/Chatting';
import { TransactionStore } from 'stores/Transaction';
import { paymentList, solution } from 'utils/parseMMS';
import chattingAPI from 'apis/mms';
import { io } from 'socket.io-client';

const socket = io('localhost:5000');

socket.on('connect', () => {
  console.log(socket.connected);
  socket.emit('new_connect', TransactionStore.accountObjId);
});

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
  const [chatArrived, setChatArrived] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(chatArrived);
      ChattingStore.addChat(message, 'server');
      setChatArrived(message);
    });
  }, []);

  const ref = useRef<HTMLDivElement>();
  const onPressEnter = (e: any) => {
    const ENTER_KEYCODE = 13;
    if (e.keyCode === ENTER_KEYCODE) {
      onSubmitHandler();
    }
  };
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
      socket.emit('message', TransactionStore.accountObjId, '확인되었습니다.');
    } else {
      ChattingStore.addChat('실패했습니다.', 'server');
      socket.emit('message', TransactionStore.accountObjId, '실패했습니다.');
    }
    setProcessing(false);
    setParsedMMS(defaultMMS);
    setChangedValue('');
  };

  const onSubmitHandler = () => {
    ChattingStore.addChat(changedValue, myMessage);
    socket.emit('message', TransactionStore.accountObjId, changedValue);
    if (!processing) {
      const parsedMms = solution(changedValue);
      if (paymentList.indexOf(parsedMms.cardname) > -1) {
        setProcessing(true);
        setParsedMMS(parsedMms);
        ChattingStore.addChat('사용처를 입력해주세요.', 'server');
        socket.emit(
          'message',
          TransactionStore.accountObjId,
          '사용처를 입력해주세요.',
        );
        setChangedValue('');
      } else setChangedValue('');
    } else {
      mmsProcess();
    }

    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  const ChattingContent = (
    <ChattingArea
      onChangeHandler={onChangeHandler}
      onPressEnter={onPressEnter}
      onSubmitHandler={onSubmitHandler}
      dataList={ChattingStore.getChattings()}
      chatValue={changedValue}
      scroll={ref}
    />
  );
  return (
    <MainTemplate
      HeaderBar={<Header title="채 팅" />}
      Contents={ChattingContent}
      NavBar={<NavBar />}
    />
  );
};

export default ChattingPage;
