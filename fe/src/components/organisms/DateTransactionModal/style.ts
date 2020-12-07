import styled from 'styled-components';

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
    background-color: red;
  }
`;

export const Content = styled.div`
  position: fixed;
  width: 200px;
  height: 200px;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
  background-color: green;
  z-index: 15;
`;

export default {};
