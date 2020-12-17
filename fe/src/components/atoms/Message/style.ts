import styled from 'styled-components';

export interface Props {
  tag: 'error' | 'warning' | 'info' | 'success';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export const Message = styled.span<Props>`
  color: ${({ tag, theme }) => theme.tag[tag]};
  font-size: ${({ size, theme }) => theme.fontSize[size]};
`;
