import styled from 'styled-components';

export const DecsContainer = styled.div`
  display: grid;
  max-width: 240px;
  grid-gap: 0.7em;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem 0.3rem;
  background: transparent;
  background: ${({ theme }) => theme.color.white};
`;
export const Small = styled.small`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.subText};
`;
