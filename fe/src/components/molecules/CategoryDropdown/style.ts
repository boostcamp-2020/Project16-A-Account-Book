import styled from 'styled-components';
import EditButton from 'components/atoms/EditButton';

export const CheckBoxContainer = styled.div`
  margin-left: auto;
`;
export const DropdownItem = styled.div`
  border: none;
  padding: 0.5rem;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.subText};
  }

  background: transparent;
  display: flex;
  color: ${({ theme }) => theme.color.black};
`;

export const DropdownBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: inherit;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.color.subText};
  padding: 0.3em;
  top: 1.3rem;
  left: 0;
`;

export const CategoryEditButton = styled(EditButton)`
  width: 5%;
`;
