import styled from 'styled-components';

export const StatisticsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
`;
export const StatisticsData = styled.div`
  display: flex;
  justify-content: space-between;

  .statistics-data__percent {
    color: ${({ theme }) => theme.color.subText};
  }

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const Color = styled.div`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background: ${({ color }) => color};
`;

export const Percent = styled.div`
  color: ${({ theme }) => theme.color.subText};
`;
