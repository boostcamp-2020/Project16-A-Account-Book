import styled from 'styled-components';

export const TotalStatusCheckBox = styled.div`
  display: flex;
`;
export const StatisticsTitle = styled.div`
  margin: 0.5rem 0;
  font-size: x-large;
`;

export const PieChartWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TotalCheckboxWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
`;

export const PriceWrap = styled.div`
  margin-left: 0.4em;
  &.income {
    color: ${({ theme }) => theme.color.brandColor};
  }
  &.expense {
    color: ${({ theme }) => theme.color.red};
  }
`;
