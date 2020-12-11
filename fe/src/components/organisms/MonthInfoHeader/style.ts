import Button from 'components/atoms/Button';
import styled, { css } from 'styled-components';
import { ButtonStyleProps } from 'components/atoms/Button/style';
import { rgba } from 'polished';

export interface MonthHeaderInfoButton extends ButtonStyleProps {
  color?: string;
  border?: boolean;
}
export const MonthButton = styled(Button)<MonthHeaderInfoButton>`
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.brandColor};
  border: 0;
  width: 100%;
  height: 50%;
  ${({ border, theme }) =>
    border &&
    css`
      border-right: 2px solid ${rgba(theme.color.subText, 0.2)};
      font-weight: 900;
    `}
  background: transparent;
`;

export const MonthInfoHeaderContainer = styled.section`
  display: grid;
  z-index: -1;
  grid-template-columns: 3fr 5fr 1fr;
  margin: 0.3rem 0.1rem;
  border: 0.4rem solid ${({ theme }) => theme.color.brandColor};
  border-radius: 10px;
  padding: 0 0.5rem;
  min-height: 4rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
`;
