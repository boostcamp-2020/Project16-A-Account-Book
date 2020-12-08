import styled from 'styled-components';
import Input from 'components/atoms/Input';
import IconBtn from 'components/molecules/IconButton';

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

export const IconButton = styled(IconBtn)`
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.color.brandColor};
`;
