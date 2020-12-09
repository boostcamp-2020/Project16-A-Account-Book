import styled from 'styled-components';

export const CategoryContainer = styled.div``;

export const CategoryHeader = styled.div``;

export const CategoryTitle = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 1rem;
`;

export const CategoryBody = styled.div`
  height: calc(100vh - 7rem - 50px);
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;

  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  bottom: 0;
  left: 0;

  border-top: 2px solid ${({ theme }) => theme.color.lightBorder};
`;
