import styled from 'styled-components';
import ButtonAtom from 'components/atoms/Button';
import InputAtom, { Props as InputProps } from 'components/atoms/Input';

export interface ButtonInputProps extends InputProps {
  active: boolean;
}

export const Button = styled(ButtonAtom)`
  border: 1px solid ${({ theme }) => theme.color.blue};

  background-color: ${({ theme }) => theme.color.white};
`;

export const Input = styled(InputAtom)`
  border: transparent;
`;

export const ButtonInput = styled(InputAtom)<ButtonInputProps>`
  width: 25%;
  border: 1px solid
    ${({ active, theme }) => (active ? theme.color.blue : theme.color.darkgray)};
  color: ${({ active, theme }) =>
    active ? theme.color.blue : theme.color.darkgray};
  & + & {
    margin-left: 1rem;
  }
`;

export const Form = styled.form`
  div + div {
    margin-top: 1rem;
  }
`;
