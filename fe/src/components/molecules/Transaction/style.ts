import styled from 'styled-components';
import Icon from 'components/atoms/Icons';
import PriceTag from 'components/atoms/PriceTag';

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
  margin-left: 0.5em;
`;

export const TransactionIcon = styled(Icon)``;

export const Client = styled.div``;

export const Classification = styled.div`
  font-size: 0.7rem;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.color.subText};
`;

export const Price = styled(PriceTag)`
  margin-left: 0.5rem;
`;
