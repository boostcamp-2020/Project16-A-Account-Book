import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const LabelInput = styled.div`
  display: flex;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex: 1 1 30%;
  padding: 1rem;

  align-items: center;
`;

export const InputWrap = styled(Input)`
  flex: 2 1 auto;
  border: transparent;
`;
