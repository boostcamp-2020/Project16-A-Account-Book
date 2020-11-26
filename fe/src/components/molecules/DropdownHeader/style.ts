import styled from 'styled-components';
import Button from 'components/atoms/Button';

const DropdownButton = styled(Button)`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.color.black};
`;

export default DropdownButton;
