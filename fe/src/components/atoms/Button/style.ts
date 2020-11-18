import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

export interface ButtonStyleProps {
  types?: string;
  border?: string;
}

export const ButtonStyle = css<ButtonStyleProps>`
  background-color: ${prop('bgColor', 'black')};
  color: ${prop('color', 'white')};
  width: ${prop('width', '100%')};
  height: ${prop('height', '100%')};
  border: ${prop('border', 'none')};
  font-size: ${prop('fontSize', '1rem')};

  text-align: center;
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

const localLoginSize = {
  width: '3.8rem',
  height: '1.2rem',
  fontSize: '0.6rem',
};

export const LocalLogin = styled.button`
  ${ButtonStyle}
  width: ${localLoginSize.width};
  height: ${localLoginSize.height};
  font-size: ${localLoginSize.fontSize};
`;

const oauthLoginSize = {
  width: '7.1rem',
  height: '2rem',
  fontSize: '1rem',
};

export const OAuthLogin = styled.button`
  ${ButtonStyle}
  width: ${oauthLoginSize.width};
  height: ${oauthLoginSize.height};
  font-size: ${oauthLoginSize.fontSize};
`;
