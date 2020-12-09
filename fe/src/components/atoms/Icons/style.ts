import styled from 'styled-components';

export interface Prop {
  size: string;
  theme: {
    [propName: string]: any;
  };
}

export default styled.img<Prop>`
  width: ${({ size, theme }) => theme.len[size] || size};
  height: ${({ size, theme }) => theme.len[size] || size};
  border: none !important;
`;
