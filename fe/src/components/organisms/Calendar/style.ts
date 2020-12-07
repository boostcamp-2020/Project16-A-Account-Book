import styled from 'styled-components';

import CalendarOneWeek from 'components/molecules/CalendarOneWeek';
import CalendarDayBar from 'components/molecules/CalendarDayBar';

export const Calendar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const DayBar = styled(CalendarDayBar)``;

export const OneWeek = styled(CalendarOneWeek)`
  width: 100%;
`;

export const CenterMonth = styled.div`
  font-size: 6rem;
  color: rgba(0, 0, 0, 0.2);
  width: 12rem;
  height: 4rem;
  position: absolute;
  left: calc(50% - 6rem);
  top: calc(50% - 2rem);
  text-align: center;
`;
