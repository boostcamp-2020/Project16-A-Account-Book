import React from 'react';
import TransactionInputField, {
  Props as TransactionInputFieldProps,
} from 'components/organisms/TransactionInputField';
import trashSvg from 'assets/svg/trash.svg';
import * as S from './style';

export interface Props {
  InputFieldProps: TransactionInputFieldProps;
  onSubmit?: any;
  isUpdate?: boolean;
  onDelete?: any;
}

const TransactionForm = ({
  InputFieldProps,
  onSubmit,
  isUpdate = false,
  onDelete,
}: Props): React.ReactElement => {
  return (
    <S.Form>
      <TransactionInputField {...InputFieldProps} />
      <S.ButtonArea>
        {isUpdate && <S.IconButton icon={trashSvg} onClick={onDelete} />}
        <S.SubmitButton onClick={onSubmit} value="저장" />
      </S.ButtonArea>
    </S.Form>
  );
};

export default TransactionForm;
