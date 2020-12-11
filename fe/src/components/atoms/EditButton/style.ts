import styled from 'styled-components';

export interface EditButtonProps {
  isClicked: boolean;
}

export const EditButton = styled.input<EditButtonProps>`
  background-color: ${({ theme }) => theme.color.grayBackground};
  display: ${(props) => (props.isClicked ? 'block' : 'none')};
  padding: 0% 1%;
  height: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.selectedBlue};
`;

export default {};
