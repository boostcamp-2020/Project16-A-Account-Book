import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const CalendarOneDate = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  width: 14.5%;
  height: 5rem;
  text-align: left;
  background-color: transparent;
`;

export const DateText = styled.div`
  padding-top: 5%;
  height: 20%;
`;

export const PriceTextWrap = styled.div`
  font-size: 0.75rem;
  height: 50%;
  text-align: center;
`;

export const EmptyArea = styled.div`
  height: 30%;
`;

export const IncomeText = styled.div`
  color: ${({ theme }) => theme.color.brandColor};
`;

export const ExpenseText = styled.div`
  color: ${({ theme }) => theme.color.subText};
`;
