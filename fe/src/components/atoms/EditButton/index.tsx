import React from 'react';
import * as S from './style';

export interface EditButtonProps {
  isClicked: boolean;
  onClick?: any;
}

const EditButton = ({ isClicked, onClick }: EditButtonProps) => {
  return <S.EditButton isClicked={isClicked} onClick={onClick} />;
};

export default EditButton;
