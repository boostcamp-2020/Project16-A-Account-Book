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
  const classifications = ['지출', '수입'];

  const [formValue, setFormValue] = useState({
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    client: '',
    memo: '',
    price: 0,
    classification: '',
    category: '',
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
    ...formValue,
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
