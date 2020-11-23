import styled from 'styled-components';
import DateAtom from 'components/atoms/DateAtom';

export interface ButtonStyleProps {
  size?: string;
}

export interface ReducedDateProps {
  theme: {
    [propName: string]: any;
  };
}

export const ReducedDate = styled(DateAtom)`
  color: ${({ theme }) => {
    return theme.color.darkgray;
  }};
`;

export const DateMoneyHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: space-between;
`;
