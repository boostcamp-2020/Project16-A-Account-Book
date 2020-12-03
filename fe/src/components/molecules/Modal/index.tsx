import React from 'react';
import * as S from './style';

export interface ModalProps extends S.ModalProps {
  content: any;
}

const Modal = ({ visible, content }: ModalProps) => {
  return (
    <S.ModalContainer>
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper visible={visible}>
        <S.ModalInner>{content}</S.ModalInner>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
