import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const DropdownButton = styled(Button)`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.color.black};
`;

export interface Prop {
  theme: any;
  border?: boolean;
}
export const Container = styled.div<Prop>`
  flex: 1;
  position: relative;
  width: calc(100% - 0.6rem - 2px);
  border-bottom: 1px solid
    ${({ theme, border }) => (border ? theme.color.subText : 'transparent')};
`;
