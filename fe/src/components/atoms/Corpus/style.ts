import styled from 'styled-components';
import theme from 'styles/theme';

const fontsize = theme.fontSize.sm;
// color수정
const TextBox = styled.div`
  background-color: #2cbe4e;
  color: white;
  padding: 1%;
  width: fit-content;
  max-width: 70%;
  font-size: ${fontsize};
`;

export default TextBox;
