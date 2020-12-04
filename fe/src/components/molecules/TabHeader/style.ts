import styled from 'styled-components';
import Button from 'components/atoms/Button';
import theme from 'styles/theme';

export const TabButton = styled(Button)`
  background-color: ${theme.color.white};
  color: ${theme.color.subText};
  font-size: ${theme.fontSize.md};
  border: none;
  padding: 1.5%;
`;

export const TabUI = styled.div`
  display: flex;
  justify-contents: space-between;
  padding: 0%;
  border-bottom: 0.1rem groove ${theme.color.subText};
`;
