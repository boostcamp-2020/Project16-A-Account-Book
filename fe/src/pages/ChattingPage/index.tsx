import React, { useState, useRef, useEffect, useContext } from 'react';
import { SocketContext } from 'context';
import MainTemplate from 'components/templates/MainTemplate';
import Header from 'components/organisms/HeaderBar';
import ChattingArea from 'components/organisms/ChattingArea';
import NavBar from 'components/organisms/NavBar';
import { ChattingStore } from 'stores/Chatting';
import { TransactionStore } from 'stores/Transaction';
import { paymentList, solution } from 'utils/parseMMS';
import chattingAPI from 'apis/mms';
import { IMessage } from 'types';

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

const myMessage: string = String(window.sessionStorage.getItem('userObjId'));

const ChattingPage = () => {
  const [changedValue, setChangedValue] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const [parsedMMS, setParsedMMS] = useState<ParsedSMS>(defaultMMS);
  const [chattings, setChattings] = useState<any[]>([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('new_connect', TransactionStore.accountObjId);
    socket.on('message', (messageObj: IMessage) => {
      const { message, sender } = messageObj;
      ChattingStore.addChat(message, sender);
      setChattings(ChattingStore.getChattings());
    });

    return () => {
      socket.off('message');
    };
  }, [socket]);

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
      socket.emit('message', TransactionStore.accountObjId, {
        message: '확인되었습니다.',
        sender: 'server',
      });
    } else {
      socket.emit('message', TransactionStore.accountObjId, {
        message: '실패했습니다.',
        sender: 'server',
      });
    }
    setProcessing(false);
    setParsedMMS(defaultMMS);
    setChangedValue('');
  };

  const onSubmitHandler = () => {
    socket.emit('message', TransactionStore.accountObjId, {
      message: changedValue,
      sender: myMessage,
    });
    if (!processing) {
      const parsedMms = solution(changedValue);
      if (paymentList.indexOf(parsedMms.cardname) > -1) {
        setProcessing(true);
        setParsedMMS(parsedMms);
        socket.emit('message', TransactionStore.accountObjId, {
          message: '사용처를 입력해주세요.',
          sender: 'server',
        });
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
      dataList={chattings}
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
