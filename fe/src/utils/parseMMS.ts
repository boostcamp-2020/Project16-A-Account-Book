export interface ParsedSMS {
  cardname: string;
  amount: number;
  date: string;
  time: string;
  transactionType: string;
  cardType: string;
  isDeposit: Boolean;
}

// 팀에서 서비스에 맞게 추가. 현재는 각 서비스에 있는 결제 수단을 모두 넣은  것.
export const paymentList = [
  '신한',
  '국민',
  'KB',
  '농협',
  'BC',
  '현대',
  '우리',
  'KG',
  'NH',
];

// 위에 것이랑 둘 중 하나만 써도 됨. 매핑시키기 위한 것.
// const cardObj = {
//   신한: '신한카드',
//   국민: '국민카드',
//   KB: '국민카드',
//   NH: '농협카드',
//   농협: '농협카드',
//   BC: 'BC카드',
//   현대: '현대카드',
//   우리: '우리카드',
//   KG: 'KG이니시스',
// };

export const solution = (sms: string) => {
  const newData: ParsedSMS = {
    cardname: '',
    amount: 0,
    date: '',
    time: '',
    transactionType: '',
    cardType: '',
    isDeposit: false,
  };

  // 승인, 취소, 거절을 구분하는 변수
  const transactionTypeToken = sms.match('취소|거절');
  newData.transactionType = transactionTypeToken
    ? transactionTypeToken[0]
    : '승인';

  if (newData.transactionType === '거절') {
    return newData;
  }

  const isDepositToken = sms.match('입금');
  newData.isDeposit = !!(isDepositToken || newData.transactionType === '취소');

  // 카드타입! 얘를 어떻게 처리하면 좋을지?
  const cardTypeToken = sms.match('체크');
  newData.cardType = cardTypeToken ? cardTypeToken[0] : '신용';

  const parsedSMSDatas = parseSMS(sms);
  parsedSMSDatas.forEach((data, i) => {
    if (i === 0) {
      const cardName = data
        .replace(/[[\]]/gi, '')
        .substring(0, 2)
        .toUpperCase();
      if (paymentList.indexOf(cardName) > -1) newData.cardname = cardName;
    }
    if (data.includes('원') && !newData.amount) {
      const amountTarget = data.match(/[0-9]+(,?[0-9]+)+/);
      if (amountTarget)
        newData.amount = Number(amountTarget[0].replace(',', ''));
      return;
    }
    if (data.includes(':')) {
      const timeTarget = data.match(/[0-9]{2}:[0-9]{2}/);
      if (timeTarget) [newData.time] = [timeTarget[0]];
    }
    if (data.includes('/')) {
      const dateTarget = data.match(/[0-9]{2}\/[0-9]{2}/);
      if (dateTarget) {
        let date = dateTarget[0];
        date.replace('/', '.');
        date = `${new Date().getFullYear()}.${date}`;
        [newData.date] = [date];
      }
    }
  });
  return newData;
};

const parseSMS = (string: string) => {
  return string
    .replace(/\[web발신\]/i, '')
    .trim()
    .split(/[\s\n\r]/g)
    .filter((e) => e);
};

export default {};
