import React from 'react';
import * as S from './style';

export interface EditButtonProps {
  isClicked: boolean;
  onClick?: any;
  type: string;
  value: string;
}

const EditButton = ({ isClicked, onClick, value }: EditButtonProps) => {
  return (
    <S.EditButton
      isClicked={isClicked}
      onClick={onClick}
      type="button"
      value={value}
    />
  );
};

export default EditButton;
