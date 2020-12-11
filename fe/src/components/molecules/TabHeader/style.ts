import styled from 'styled-components';
import Button from 'components/atoms/Button';

export const TabButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.subText};
  font-size: ${({ theme }) => theme.fontSize.md};
  border: none;
  margin: 1em 0;
  padding: 0.5em;
  & + & {
    border-left: 1px solid ${({ theme }) => theme.color.subText};
  }
`;

export const TabUI = styled.div`
  display: flex;
  padding: 0%;
  border-bottom: 0.1rem groove ${({ theme }) => theme.color.subText};
`;
