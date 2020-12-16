import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const Button = styled(Input)`
  height: 3rem;
  margin-right: 1rem;
  :hover {
    background-color: ${({ theme }) => theme.color.transparentBrandColor};
  }
`;

export const AccountSubmitButtonList = styled.div`
  width: 100%;
  display: flex;
  ${Button}:first-child {
    margin-left: 1rem;
  }
`;
