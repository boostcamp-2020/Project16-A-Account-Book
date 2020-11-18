import styled from 'styled-components';

interface Prop {
  disabled: boolean;
  color: string;
  placeholder: string;
}

const SInput = styled.input`
  height: 4rem;
  width: 100%;
  padding: 0.5% 1%;
  color: ${(prop: Prop): string => prop.color};
  background-color: ${(prop: Prop): string =>
    prop.disabled ? 'gray' : 'white'}
  disabled:${(prop: Prop): string => (prop.disabled ? 'disabled' : 'false')}

  border: 1px solid;
  border-radius: 1.5px;
  placeholder:${(prop: Prop): string => prop.placeholder};
  $:focus {
    outline: none;
  }
`;

export default SInput;
