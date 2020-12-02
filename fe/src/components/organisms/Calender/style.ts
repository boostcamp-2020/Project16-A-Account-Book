import styled from 'styled-components';

import CalenderOneWeek from 'components/molecules/CalenderOneWeek';
import CalenderDayBar from 'components/molecules/CalenderDayBar';

export const Calender = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayBar = styled(CalenderDayBar)``;

export const OneWeek = styled(CalenderOneWeek)``;
