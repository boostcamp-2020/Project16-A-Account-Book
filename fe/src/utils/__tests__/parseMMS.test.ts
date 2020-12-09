import { solution } from '../parseMMS';

test('solution', () => {
  expect(
    solution(`[WEB발신]
      [kg이니시스]
      04/12 21:13
      464,000원 익월
      합산요금청구`),
  ).toEqual({
    cardname: 'KG',
    amount: 464000,
    date: '04/12',
    time: '21:13',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: false,
  });

  expect(
    solution(`[WEB발신]
        KB국민카드 김영근님 06/07
        09:22 5000원
        결제 승인`),
  ).toEqual({
    cardname: 'KB',
    amount: 5000,
    date: '06/07',
    time: '09:22',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: false,
  });

  expect(
    solution(`[Web발신]
        농협 입금 200원
        06/11 22:29 123-1234-4567-12
        잔액 200000원`),
  ).toEqual({
    cardname: '농협',
    amount: 200,
    date: '06/11',
    time: '22:29',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: true,
  });

  expect(
    solution(`농협 출금 5000원
        08/31 19:01 123-1234-1234-12
        잔액 200000원`),
  ).toEqual({
    cardname: '농협',
    amount: 5000,
    date: '08/31',
    time: '19:01',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: false,
  });

  expect(
    solution(`현대 ZERO 승인
      2,500원 일시불
      04/10 13:15
      코레일유통서울지사
      누적 560,852원
      0.7%할인`),
  ).toEqual({
    cardname: '현대',
    amount: 2500,
    date: '04/10',
    time: '13:15',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: false,
  });

  expect(
    solution(`[Web발신]
        [신한체크승인] 최*희(7062)
        02/10 13:10
        (금액)1,000원 PAYCO`),
  ).toEqual({
    cardname: '신한',
    amount: 1000,
    date: '02/10',
    time: '13:10',
    transactionType: '승인',
    cardType: '체크',
    isDeposit: false,
  });

  expect(
    solution(`롯데3121 승인
      5,200원 일시불
      09/15 18:31
      월드크리닝 롯데마트`),
  ).toEqual({
    cardname: '롯데',
    amount: 5200,
    date: '09/15',
    time: '18:31',
    transactionType: '승인',
    cardType: '신용',
    isDeposit: false,
  });

  expect(
    solution(`[Web발신]
      우리(4575)승인취소
      임*봉님
      4562원 일시불 
      12/07 20:29
      네이버페이
      누적123,456원`),
  ).toEqual({
    cardname: '우리',
    amount: 4562,
    date: '12/07',
    time: '20:29',
    transactionType: '취소',
    cardType: '신용',
    isDeposit: true,
  });

  expect(
    solution(`[Web발신]
      우리(8804) 체크승인
      윤*우님
      10,000원
      11/03 10:03
      스타벅스코리아`),
  ).toEqual({
    cardname: '우리',
    amount: 10000,
    date: '11/03',
    time: '10:03',
    transactionType: '승인',
    cardType: '체크',
    isDeposit: false,
  });

  expect(
    solution(`[Web발신]
      KB국민체크
      윤*우님
      06/08 08:57
      28,440원
      11PAY 인증
      승인취소
      `),
  ).toEqual({
    cardname: 'KB',
    amount: 28440,
    date: '06/08',
    time: '08:57',
    transactionType: '취소',
    cardType: '체크',
    isDeposit: true,
  });
});
