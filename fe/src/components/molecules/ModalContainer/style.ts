import styled from 'styled-components';
import { rgba } from 'polished';

export type Prop = {
  justify: string;
  align: string;
};
const positionConverter = (type: string) => {
  switch (type) {
    case 'up':
    case 'left':
      return 'flex-start';
    case 'down':
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};
const Container = styled.div<Prop>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
  justify-content: ${({ justify }) => positionConverter(justify)};
  align-items: ${({ align }) => positionConverter(align)};
  background: ${({ theme }) => rgba(theme.color.black, 0.5)};
  .modal-content {
    position: relative;
    z-index: 101;
  }
`;

export default Container;
