import styled from 'styled-components';

import CalendarOneWeek from 'components/molecules/CalendarOneWeek';
import CalendarDayBar from 'components/molecules/CalendarDayBar';

export const CenterMonth = styled.div`
  font-size: 6rem;
  color: rgba(0, 0, 0, 0.1);
  width: 20rem;
  height: 4rem;
  position: absolute;
  left: calc(50% - 10rem);
  top: calc(50% - 2rem);
  text-align: center;
  z-index: -1;
`;

export const Calendar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 1em 0.5em 0.5em;
  :hover {
    border: 2px solid ${({ theme }) => theme.color.lightBorder};
    ${CenterMonth} {
      color: ${({ theme }) => theme.color.transparentBrandColor};
    }
  }
`;

export const DayBar = styled(CalendarDayBar)``;

export const OneWeek = styled(CalendarOneWeek)`
  width: 100%;
`;
