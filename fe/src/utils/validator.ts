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

const isPositive = (num: number) => num >= 0;

export const transactionValidator = (form: State) => {
  const isValid = checkAllRequiredInputFilled(form) && isPositive(form.price);
  return isValid;
};

export default {};
