import Button from 'components/atoms/Button';
import styled, { css } from 'styled-components';
import { ButtonStyleProps } from 'components/atoms/Button/style';
import { rgba } from 'polished';
import DateRange from 'components/molecules/DateRange';

export interface MonthHeaderInfoButton extends ButtonStyleProps {
  color?: string;
  border?: boolean;
}

export const DateRangeBox = styled(DateRange)`
  @media only screen and (min-width: 300px) {
    padding: 0;
  }
  @media only screen and (min-width: 400px) {
    padding: 0.5rem 0.2rem;
  }
`;
export const MonthButton = styled(Button)<MonthHeaderInfoButton>`
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.brandColor};
  border: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.brandColor};
  :hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.brandColor};
  }
  ${({ border, theme }) =>
    border &&
    css`
      border-right: 2px solid ${rgba(theme.color.subText, 0.2)};
      font-weight: 900;
    `}
  background: transparent;
  @media only screen and (min-width: 300px) {
    width: 2.5em;
    height: 2.5em;
  }
  @media only screen and (min-width: 400px) {
    width: 3em;
    height: 3em;
  }
`;

export const MonthInfoHeaderContainer = styled.section`
  display: grid;
  z-index: -1;
  grid-template-columns: 3fr 5fr 1fr;
  margin: 0.3rem 0.1rem;
  border: 0.4rem solid ${({ theme }) => theme.color.brandColor};
  border-radius: 10px;
  padding: 0 0.5rem;
  min-height: 4rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
`;

export const MoneyInfo = styled.div`
  display: flex;
  flex-direction: column;
  .income {
    color: ${({ theme }) => theme.color.brandColor};
  }
  .expense {
    color: ${({ theme }) => theme.color.red};
  }
  @media only screen and (min-width: 300px) {
    .category-type {
      display: flex;
      flex-direction: column;
      & + & {
        margin-top: 1000em;
      }
    }
  }
  @media only screen and (min-width: 400px) {
    .category-type {
      display: flex;
      flex-direction: row;
    }
    .total-money {
      margin-left: 0.4em;
    }
  }
`;
