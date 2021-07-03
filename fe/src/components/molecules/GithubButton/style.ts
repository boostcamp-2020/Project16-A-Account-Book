import styled from 'styled-components';
import theme from 'styles/theme';
import Button from '../../atoms/Button';

export const GithubButton = styled(Button)`
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  border: none;
  border-radius: 5px;
  width: 210px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.4rem;
`;
