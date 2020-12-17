import styled from 'styled-components';
import InputAtom, { Props as InputProps } from 'components/atoms/Input';

export interface ButtonInputProps extends InputProps {
  active: boolean;
}

export const Input = styled(InputAtom)`
  height: 2rem;
  border: transparent;
`;

export const ButtonInput = styled(InputAtom)<ButtonInputProps>`
  width: 25%;
  height: 2rem;
  font-size: 1rem;
  border: 1px solid
    ${({ active, theme }) => (active ? theme.color.blue : theme.color.subText)};
  color: ${({ active, theme }) =>
    active ? theme.color.blue : theme.color.subText};
  & + & {
    margin-left: 1rem;
  }
`;

export const Form = styled.form`
  div + div {
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  padding: 1rem 1rem;
  select {
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.subText};
  }
`;
