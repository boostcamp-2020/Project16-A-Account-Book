import styled from 'styled-components';

export const TransactionStyle = styled.div`
  box-sizing: border-box;
  padding: 0.4em;
  width: 100%;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.transparentBrandColor};
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex: 6 1 auto;
  margin-left: 0.5em;
  flex-direction: column;
  @media only screen and (min-width: 300px) {
    width: 12em;
  }
  @media only screen and (min-width: 1024px) {
    width: 20em;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  flex: 4 1 auto;
  justify-content: flex-end;
`;

export const Client = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Classification = styled.div`
  font-size: 0.7rem;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.color.subText};
`;
