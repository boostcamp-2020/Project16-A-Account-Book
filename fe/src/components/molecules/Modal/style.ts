import styled from 'styled-components';

export interface ModalProps {
  visible: boolean;
}

export const ModalContainer = styled.div``;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${({ visible }: ModalProps) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${({ visible }: ModalProps) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.grayBackground};
  opacity: 0.5;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.05rem;
  width: 20rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 2rem 1rem;
`;
