import styled from 'styled-components';
import Button from 'components/atoms/Button';

export interface Props {
  size: string;
  theme: {
    [propName: string]: any;
  };
}

export const IconButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;

  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div<Props>`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ size, theme }) => theme.fontSize[size] || size};
`;
