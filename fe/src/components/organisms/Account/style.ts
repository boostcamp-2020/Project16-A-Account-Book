import styled from 'styled-components';
import IconComponent from 'components/atoms/Icons';

export const Account = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid black;
  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled(IconComponent)`
  margin-right: 1rem;
`;
