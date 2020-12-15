import styled from 'styled-components';
import Input from 'components/atoms/Input';

export interface TabButtonProps {
  color: string;
}

export const TabButton = styled(Input)<TabButtonProps>`
  background-color: ${({ theme }) => theme.color.white};
  color: ${(props) => props.color};
  font-size: ${({ theme }) => theme.fontSize.md};
  border: none;
  margin: 1em 0;
  padding: 0.5em;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.color.subText};
  }
  text-align: center;
`;

export const TabUI = styled.div`
  display: flex;
  padding: 0%;
  border-bottom: 0.1rem groove ${({ theme }) => theme.color.subText};
`;
