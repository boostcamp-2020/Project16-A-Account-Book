import styled from 'styled-components';
import Icon from 'components/atoms/Icons';
import PriceTag from 'components/atoms/PriceTag';

export const TransactionStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrap1 = styled.div`
  margin-left: 0.5rem;
`;

export const Wrap2 = styled.div`
  display: flex;
`;

export const TransactionIcon = styled(Icon)``;

export const Client = styled.div``;

export const Classification = styled.div`
  color: ${({ theme }) => theme.color.darkgray};
`;

export const Price = styled(PriceTag)`
  margin-left: 0.5rem;
`;

export default {};
