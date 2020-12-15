import styled from 'styled-components';

export interface IPrice {
  color: string;
  theme: {
    [propName: string]: any;
  };
}
export const Price = styled.div<IPrice>`
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => theme.color[color]};
  & + & {
    margin-left: 0.5em;
  }
`;
