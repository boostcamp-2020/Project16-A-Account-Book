import styled from 'styled-components';
import DateMoneyHeader from 'components/molecules/DateMoneyHeader';

export interface ButtonStyleProps {
  size?: string;
}

export const Header = styled(DateMoneyHeader)`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.lightBorder}`};
  padding-bottom: 0.3rem;
`;

export const AccountDate = styled.div``;
