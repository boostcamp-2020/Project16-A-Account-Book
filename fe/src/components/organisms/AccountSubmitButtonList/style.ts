import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const Button = styled(Input)`
  height: 3rem;
  margin-right: 1rem;
`;

export const AccountSubmitButtonList = styled.div`
  width: 100%;
  display: flex;
  ${Button}:first-child {
    margin-left: 1rem;
  }
`;
