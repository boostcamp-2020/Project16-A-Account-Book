import styled from 'styled-components';
import Button from 'components/atoms/Button';

export interface Prop {
  checked: boolean;
}
const CheckboxContainer = styled(Button)<Prop>`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.brandColor};
  border: 1px solid ${({ theme }) => theme.color.brandColor};
  border-radius: 15%;
  > img {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;

export default CheckboxContainer;
