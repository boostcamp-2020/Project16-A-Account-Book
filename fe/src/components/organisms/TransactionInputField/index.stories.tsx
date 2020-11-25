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
  const categories = ['미분류', '급여', '용돈', '금융수입'];
  const methods = ['현금', '카드', '카카오뱅크', '네이버페이'];
  const classifications = ['지출', '수입', '이체'];

  const [formValue, setFormValue] = useState({
    category: '미분류',
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    client: '',
    memo: '',
    classification: '',
    method: '',
  });

  const formHandler = ({ target }: any): void => {
    const { name, value } = target;
    setFormValue((prevformValue) => ({ ...prevformValue, [name]: value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <TransactionInputField
        date={formValue.date}
        categories={categories}
        classification={formValue.classification}
        classifications={classifications}
        client={formValue.client}
        memo={formValue.memo}
        formHandler={formHandler}
        methods={methods}
      />
    </ThemeProvider>
  );
};
