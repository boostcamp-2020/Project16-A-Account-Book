import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

export interface ButtonStyleProps {
  bgColor?: string;
  color?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  border?: string;
}

export const ButtonStyle = css<ButtonStyleProps>`
  background-color: ${prop('bgColor', 'grayscale')};
  color: ${prop('color', 'red')};
  width: ${prop('width', '7')}rem;
  height: ${prop('height', '2')}rem;
  border: ${prop('border', 'none')};
  font-size: ${prop('fontSize', '3')}rem;

  text-align: center;
`;

export const Button = styled.button`
  ${ButtonStyle}
`;
