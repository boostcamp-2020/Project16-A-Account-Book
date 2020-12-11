import styled from 'styled-components';
import FilterBarComponent from 'components/organisms/FilterBar';

export const Container = styled.div``;

export const FilterBar = styled(FilterBarComponent)`
  margin-top: 0.3rem;
`;

export const ContentArea = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 3rem;
  height: calc(100vh - 3rem - 4rem - 2px);
  left: 0;
  padding: 0.5em 1em;
`;

export const Header = styled.header`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  margin: 1em 0.5em 0 0.5em;
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
