import styled from 'styled-components';
import DateMoneyHeader from 'components/molecules/DateMoneyHeader';
import Transaction from 'components/molecules/Transaction';

export const Header = styled(DateMoneyHeader)`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.lightBorder}`};
  padding-bottom: 0.3rem;
`;

export const AccountTransaction = styled(Transaction)`
  margin-top: 0.5rem;
`;

export const Container = styled.div``;
