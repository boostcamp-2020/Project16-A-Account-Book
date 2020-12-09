import React from 'react';
import * as S from './style';

export interface ModalProps extends S.ModalProps {
  content: any;
}

const Modal = ({ visible, content }: ModalProps) => {
  return (
    <S.ModalContainer visible={visible}>
      <S.ModalWrapper>
        <S.ModalInner>{content}</S.ModalInner>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default React.memo(Modal);
