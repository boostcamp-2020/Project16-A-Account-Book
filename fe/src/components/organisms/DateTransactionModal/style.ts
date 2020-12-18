import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 69%;
  }
  @media only screen and (min-width: 1024px) {
    width: 65%;
  }
  height: 30%;
  bottom: -30%;
  z-index: 15;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  transition: all 1s ease 0s;
  & > div {
    width: 80%;
  }
`;

export const DateTransactionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
  &.visible {
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.transparentBackground};
  }
  &.visible + div {
    background-color: white;
    bottom: 0;
  }
`;

export default {};
