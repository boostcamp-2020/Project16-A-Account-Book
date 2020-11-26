import styled from 'styled-components';
import Icon from 'components/atoms/Icons';
import PriceTag from 'components/atoms/PriceTag';

export const TransactionStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PaymentInfo = styled.div`
  margin-left: 0.5rem;
`;

export const TransactionIcon = styled(Icon)``;

export const Client = styled.div``;

export const Classification = styled.div`
  color: ${({ theme }) => theme.color.subText};
`;

export const Price = styled(PriceTag)`
  margin-left: 0.5rem;
`;

export default {};
