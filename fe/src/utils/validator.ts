import { State } from 'hooks/useTransactionInput';

const isBlank = (value: any) => {
  return value === null || value === undefined || value === '';
};

export const transactionValidator = (Form: State) => {
  const isValid = Object.entries(Form).every(([key, value]) => {
    if (key !== 'memo' && key !== 'classification') {
      if (isBlank(value)) {
        return false;
      }
    }
    return true;
  });
  return isValid;
};

export default {};
