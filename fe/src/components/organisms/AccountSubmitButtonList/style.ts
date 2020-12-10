import styled from 'styled-components';
import ButtonComponent from 'components/atoms/Button';

export const Button = styled(ButtonComponent)`
  height: 3rem;
  margin-right: 1rem;
`;

export const AccountSubmitButtonList = styled.div`
  width: 100%;
  display: flex;
  & > ${Button}:first-child {
    margin-left: 1rem;
  }
`;
