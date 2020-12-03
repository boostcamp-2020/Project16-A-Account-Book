import styled from 'styled-components';
import { rgba } from 'polished';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => rgba(theme.color.black, 0.5)};
`;

export default Container;
