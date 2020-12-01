import styled from 'styled-components';

export const DecsContainer = styled.div`
  display: grid;
  width: 240px;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem 0.3rem;
`;
export const Small = styled.small`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.subText};
`;
