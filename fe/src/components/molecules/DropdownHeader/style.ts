import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const DropdownButton = styled(Button)`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  flex: 1;
  position: relative;
  width: calc(100% - 0.6rem - 2px);
`;
