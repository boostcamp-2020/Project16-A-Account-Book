import styled from 'styled-components';

import PriceTagComponent from 'components/atoms/PriceTag';
import CalenderOneDate from 'components/molecules/CalenderOneDate';

export const CalenderOneWeek = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OneDate = styled(CalenderOneDate)``;
export const DateWrap = styled.div`
  display: flex;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const PriceTag = styled(PriceTagComponent)``;
