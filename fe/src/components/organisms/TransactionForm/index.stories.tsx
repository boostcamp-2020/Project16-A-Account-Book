import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import dayjs from 'dayjs';
import TransactionForm from '.';

export default {
  title: 'organisms/TransactionForm',
  component: TransactionForm,
  decorators: [withKnobs],
};
export const Transaction = () => {
  const categories = ['미분류', '급여', '용돈', '금융수입'];
  const methods = ['현금', '카드', '카카오뱅크', '네이버페이'];
  const classifications = ['지출', '수입', '이체'];

  const [formValue, setFormValue] = useState({
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    client: '',
    memo: '',
    price: 0,
    classification: '',
    category: '미분류',
    method: '',
  });

  const formHandler = ({ target }: any): void => {
    const { name, value } = target;
    setFormValue((prevformValue) => ({ ...prevformValue, [name]: value }));
  };

  const buttonClick = (event: MouseEvent): void => {
    event.preventDefault();
    alert('save');
  };
  const inputFieldProps = {
    date: formValue.date,
    client: formValue.client,
    memo: formValue.memo,
    price: formValue.price,
    classification: formValue.classification,
    categories,
    methods,
    classifications,
    formHandler,
  };
  return (
    <ThemeProvider theme={theme}>
      <TransactionForm
        InputFieldProps={inputFieldProps}
        onSubmit={buttonClick}
      />
    </ThemeProvider>
  );
};
