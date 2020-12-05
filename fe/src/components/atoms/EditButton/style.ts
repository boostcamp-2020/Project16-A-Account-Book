import styled from 'styled-components';

export interface EditButtonProps {
  isClicked: boolean;
}

export const EditButton = styled.button<EditButtonProps>`
  background-color: ${({ theme }) => theme.color.grayBackground};
  display: ${(props) => (props.isClicked ? 'none' : 'block')};
`;

export default {};
