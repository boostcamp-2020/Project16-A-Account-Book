import styled from 'styled-components';

export interface Prop {
  disabled?: boolean;
}

const SInput = styled.input<Prop>`
  width: 100%;
  border: 1px solid;
  border-radius: 0.1rem;
  padding: 0.5% 1%;

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray : theme.color.white};
`;

export default SInput;
