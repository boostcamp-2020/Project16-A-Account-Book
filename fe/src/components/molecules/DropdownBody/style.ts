import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  margin-left: auto;
`;

export const DropdownBodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: inherit;
  max-height: 35vh;
  overflow-y: auto;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.color.subText};
  padding: 0.3em;
  top: 1.3rem;
  left: 0;
  .dropdown-item + .dropdown-item {
    border-top: 1px solid ${({ theme }) => theme.color.subText};
  }
  .dropdown-item {
    display: flex;
    align-items: center;
    border: none;
    padding: 0.5rem;
    background: transparent;
    display: flex;
    color: ${({ theme }) => theme.color.black};
  }
  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 50vw;
    transform: translate(-50%, -50%);
  }
`;
