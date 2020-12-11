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
  background-color: white;
  width: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.color.subText};
  padding: 0.3em;
  top: 1.3rem;
  left: 0;
  .flex-container {
    display: flex;
    align-items: center;
  }
  .title-container {
    margin-right: auto;
    height: 1.5em;
  }
  .modify-button {
    margin-right: 0.5em;
  }
`;

export const CategoryEditButton = styled(EditButton)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 5%;
  margin-right: 0.5em;
`;

export const ColorBox = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 1em;
  background-color: ${({ color }) => color};
  border: 1px solid #ddd;
`;
