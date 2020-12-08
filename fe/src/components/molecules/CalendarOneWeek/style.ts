import styled, { css } from 'styled-components';

import PriceTagComponent from 'components/atoms/PriceTag';
import CalendarOneDate from 'components/molecules/CalendarOneDate';

export const CalendarOneWeek = styled.div`
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const OneDate = styled(CalendarOneDate)`
  width: 70%;
`;
export const DateWrap = styled.div`
  display: flex;
  border-top: 2px solid ${({ theme }) => theme.color.subText};
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PriceTag = css`
  margin-left: 1rem;
  font-size: 0.75rem;
`;

export const IncomePriceTag = styled(PriceTagComponent)`
  ${PriceTag}
  color: ${({ theme }) => theme.color.brandColor};
`;

export const ExpensePriceTag = styled(PriceTagComponent)`
  ${PriceTag}
  color: ${({ theme }) => theme.color.subText};
`;
