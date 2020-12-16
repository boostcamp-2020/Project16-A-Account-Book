import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const CalendarOneDate = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  width: 14.5%;
  height: 5rem;
  text-align: left;
  background-color: transparent;

  :hover {
    background-color: ${({ theme }) => theme.color.transparentBrandColor};
    border-radius: 1rem;
  }
`;

export const DateText = styled.div`
  padding-top: 5%;
  height: 20%;
`;

export const PriceTextWrap = styled.div`
  margin-top: 2em;
  font-size: 0.75rem;
  height: 50%;
  text-align: right;
`;

export const EmptyArea = styled.div`
  height: 30%;
`;

export const IncomeText = styled.div`
  font-size: 0.4rem;
  color: ${({ theme }) => theme.color.brandColor};
`;

export const ExpenseText = styled.div`
  font-size: 0.4rem;
  color: ${({ theme }) => theme.color.red};
`;
