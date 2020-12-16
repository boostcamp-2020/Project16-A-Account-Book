import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Main = styled.main`
  margin-top: 3rem;
  width: 100%;
  height: calc(100vh - 8rem);
  overflow-x: hidden;
  overflow-y: auto;
  .content-warpper {
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
