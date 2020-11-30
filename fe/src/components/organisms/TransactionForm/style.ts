import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.color.green};
`;

export const Form = styled.form`
  div + div {
    margin-top: 1rem;
  }
`;
