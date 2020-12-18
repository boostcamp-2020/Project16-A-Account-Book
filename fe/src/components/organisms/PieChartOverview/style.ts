import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const TotalViewButton = styled(Button)`
  margin: 0.5rem 0;
  border: 1px solid gray;
  background: ${({ theme }) => theme.color.white};
  color: gray;
  :hover {
    border: 1px solid ${({ theme }) => theme.color.brandColor};
    background: ${({ theme }) => theme.color.transparentBrandColor};
    color: ${({ theme }) => theme.color.brandColor};
  }
`;

export const StatisticsTitle = styled.div`
  margin: 0.5rem 0;
  font-size: x-large;
`;

export const PieChartWrap = styled.div`
  display: flex;
  justify-content: center;
`;
