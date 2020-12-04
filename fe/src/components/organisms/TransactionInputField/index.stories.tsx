import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import dayjs from 'dayjs';
import TransactionInputField from '.';

export default {
  title: 'organisms/TransactionForm',
  component: TransactionInputField,
  decorators: [withKnobs],
};
export const Transaction = () => {
  const classifications = ['지출', '수입'];

  const [formValue, setFormValue] = useState({
    category: '미분류',
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    client: '',
    memo: '',
    classification: '',
    method: '',
    price: 0,
  });

  const formHandler = ({ target }: any): void => {
    const { name, value } = target;
    setFormValue((prevformValue) => ({ ...prevformValue, [name]: value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <TransactionInputField
        price={formValue.price}
        date={formValue.date}
        classification={formValue.classification}
        classifications={classifications}
        client={formValue.client}
        memo={formValue.memo}
        formHandler={formHandler}
      />
    </ThemeProvider>
  );
};
