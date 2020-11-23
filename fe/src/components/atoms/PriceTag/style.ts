import styled from 'styled-components';

export interface Prop {
  bold: boolean;
  size?: string;
  color?: string;
  theme: {
    [propName: string]: any;
  };
}

const PriceContainer = styled.div<Prop>`
  font-weight: ${({ bold }) => (bold ? '900' : 'normal')};
  font-size: ${({ size, theme }: Prop) => {
    if (size) return theme.fontSize[size];
    return theme.fontSize.md;
  }};
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.black};
`;
export default PriceContainer;
