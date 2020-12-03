import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const SubmitButton = styled(Input)`
  background: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;

export const Form = styled.form`
  div + div {
    margin-top: 1rem;
  }
`;
