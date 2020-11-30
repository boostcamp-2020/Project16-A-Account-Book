import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const CheckBoxContainer = styled.div`
  margin-left: auto;
`;
export const DropdownItem = styled(Button)`
  border: none;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.subText};
  background: transparent;
  display: flex;
  color: ${({ theme }) => theme.color.black};
`;

export const DropdownBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
