import styled from 'styled-components';
import DateAtom from 'components/atoms/DateAtom';

export interface ReducedDateProps {
  theme: {
    [propName: string]: any;
  };
}

export const ReducedDate = styled(DateAtom)`
  color: ${({ theme }) => {
    return theme.color.subText;
  }};
`;

export const DateMoneyHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
