import styled from 'styled-components';
import FilterBarComponent from 'components/organisms/FilterBar';

export const Container = styled.div`
  .main-contaner {
    width: 100%;
  }
`;

export const FilterBar = styled(FilterBarComponent)`
  margin-top: 0.3rem;
`;

export const ContentArea = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 3rem;
  height: calc(100vh - 3rem - 4rem - 2px);
  padding: 0.5em 1em;
  left: 0;
  .content-wapper {
    width: 100%;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      width: 700px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 1024px) {
      width: 1000px;
      margin: 0 auto;
    }
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div``;

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
