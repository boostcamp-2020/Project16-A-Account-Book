import styled from 'styled-components';

export interface Props {}

export const HeaderBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.green};
`;
