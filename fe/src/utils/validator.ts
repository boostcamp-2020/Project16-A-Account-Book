import { State } from 'hooks/useTransactionInput';

const isBlank = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '')
  );
};

interface Message {
  client: string;
  price: string;
}
const checkAllRequiredInputFilled = (form: State): [boolean, Message] => {
  const message = { client: '', price: '' };
  const isAllFilled = Object.entries(form).every(([key, value]) => {
    if (key !== 'memo' && key !== 'classification') {
      if (isBlank(value)) {
        return false;
      }
    }
    return true;
  });
  if (isBlank(form.client)) {
    message.client = '거래처를 입력해주세요';
  }
  if (isBlank(form.price)) {
    message.price = '가격을 입력해주세요';
  }
  return [isAllFilled, message];
};

const isMoneyInRange = (money: number): [boolean, Message] => {
  const TRILLION = 10 ** 12;
  const isValidMoney = money >= 0 && money < TRILLION;
  if (!isValidMoney) {
    return [
      false,
      { price: '가격은 0이상 1조 미만의 값이 입력되어야 합니다.', client: '' },
    ];
  }
  return [true, { price: '', client: '' }];
};

export const transactionValidator = (form: State): [boolean, Message] => {
  const [isAllFilled, fieldMessage] = checkAllRequiredInputFilled(form);
  console.log(isAllFilled, fieldMessage);
  if (!isAllFilled) {
    return [false, fieldMessage];
  }
  const [isValid, moneyMessage] = isMoneyInRange(form.price);
  if (!isValid) {
    return [false, moneyMessage];
  }
  return [true, { price: '', client: '' }];
};

export default {};
