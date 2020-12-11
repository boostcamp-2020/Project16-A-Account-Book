import styled from 'styled-components';
import { rgba } from 'polished';

export interface ModalProps {
  visible: boolean;
}

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${({ visible }: ModalProps) => (visible ? 'flex' : 'none')};
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.color.grayBackground, 0.5)};
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  z-index: 11;
  outline: 0;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.color.white};
  width: 20rem;
  margin: 0 auto;
  padding: 1rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.subText};
`;
