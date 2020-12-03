import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const TotalViewButton = styled(Button)`
  margin: 0.5rem 0;
  border: 1px solid gray;
  background: ${({ theme }) => theme.color.white};
  color: gray;
`;

export const StatisticsTitle = styled.div`
  margin: 0.5rem 0;
  font-size: x-large;
`;
