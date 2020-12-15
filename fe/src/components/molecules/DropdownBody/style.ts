import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  margin-left: auto;
`;

export const DropdownBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-height: 35vh;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.color.subText};
  padding: 0.3em;
  .dropdown-item + .dropdown-item {
    border-top: 1px solid ${({ theme }) => theme.color.subText};
  }
  .dropdown-item {
    display: flex;
    align-items: center;
    border: none;
    padding: 0.5rem;
    min-width: 10rem;
    background: transparent;
    display: flex;
    color: ${({ theme }) => theme.color.black};
  }
`;
