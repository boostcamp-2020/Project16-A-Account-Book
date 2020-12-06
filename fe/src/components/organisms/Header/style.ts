import styled from 'styled-components';
import theme from 'styles/theme';

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${theme.color.white};
  background-color: ${theme.color.brandColor};
  margin-bottom: 1rem;
`;

export default HeaderBox;
