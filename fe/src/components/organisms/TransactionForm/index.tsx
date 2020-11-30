/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import TransactionInputField, {
  Props as TransactionInputFieldProps,
} from 'components/organisms/TransactionInputField';
import * as S from './style';

export interface Props {
  InputFieldProps: TransactionInputFieldProps;
  onSubmit?: any;
}

const TransactionForm = ({
  InputFieldProps,
  onSubmit,
}: Props): React.ReactElement => {
  return (
    <S.Form>
      <TransactionInputField {...InputFieldProps} />
      <S.SubmitButton onClick={onSubmit}>저장</S.SubmitButton>
    </S.Form>
  );
};

export default TransactionForm;
