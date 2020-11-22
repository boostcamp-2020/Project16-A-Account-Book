import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  size?: string;
}

const setButtonWidthUsingSize = (size: string) => {
  switch (size) {
    case 'sm':
      return '3.8rem';
    case 'md':
      return '5.5rem';
    case 'lg':
      return '7.1rem';
    case 'xl':
      return '12rem';
    default:
      return '100%';
  }
};

const setButtonHeightUsingSize = (size: string) => {
  switch (size) {
    case 'sm':
      return '1.2rem';
    case 'md':
      return '1.6rem';
    case 'lg':
      return '2rem';
    case 'xl':
      return '2.4rem';
    default:
      return '100%';
  }
};

const setButtonFontsizeUsingSize = (size: string) => {
  switch (size) {
    case 'sm':
      return '0.6rem';
    case 'md':
      return '0.8rem';
    case 'lg':
      return '1rem';
    case 'xl':
      return '1.2rem';
    default:
      return '100%';
  }
};

export const ButtonStyle = css<ButtonStyleProps>`
  background-color: 'black';
  color: 'white';
  width: ${(props) =>
    props.size ? setButtonWidthUsingSize(props.size) : '100%'};
  height: ${(props) =>
    props.size ? setButtonHeightUsingSize(props.size) : '100%'};
  border: 'none';
  font-size: ${(props) =>
    props.size ? setButtonFontsizeUsingSize(props.size) : '100%'};
  text-align: center;
`;

export const Button = styled.button`
  ${ButtonStyle}
`;
