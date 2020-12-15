import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const SubmitButton = styled(Button)`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.brandColor};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: large;
  border: none;
`;

export default SubmitButton;
