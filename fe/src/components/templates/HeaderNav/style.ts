import styled from 'styled-components';
import FilterBarComponent from 'components/organisms/FilterBar';

export const HeaderNav = styled.div``;

export const FilterBar = styled(FilterBarComponent)`
  margin-top: 0.3rem;
`;

export const ContentArea = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  overflow-y: auto;
  top: 3rem;
  height: 80%;
  left: 0;
  padding: 0.5em 1em;
`;

export const Header = styled.header`
  position: fixed;
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
