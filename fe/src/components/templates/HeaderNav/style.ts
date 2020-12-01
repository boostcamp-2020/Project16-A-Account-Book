import styled from 'styled-components';
import FilterBarComponent from 'components/organisms/FilterBar';

export const HeaderNav = styled.div``;

export const FilterBar = styled(FilterBarComponent)`
  margin-top: 0.3rem;
`;

export const ContentArea = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 12rem);
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
export default {};
