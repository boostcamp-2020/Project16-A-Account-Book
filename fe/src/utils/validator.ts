import { State } from 'hooks/useTransactionInput';

const isBlank = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '')
  );
};

const checkAllRequiredInputFilled = (form: State) => {
  return Object.entries(form).every(([key, value]) => {
    if (key !== 'memo' && key !== 'classification') {
      if (isBlank(value)) {
        return false;
      }
    }
    return true;
  });
};

const isMoneyInRange = (money: number) => {
  const TRILLION = 10 ** 12;
  return money >= 0 && money < TRILLION;
};

export const transactionValidator = (form: State) => {
  const isValid =
    checkAllRequiredInputFilled(form) && isMoneyInRange(form.price);
  return isValid;
};

export default {};
