import styled from 'styled-components';
import Icon from 'components/atoms/Icons';
import Input from 'components/atoms/Input';

export const UserProfileImage = styled(Icon)`
  border-radius: 50%;
`;

export const Button = styled(Input)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ bg, theme }: { bg: string; theme: any }) => theme.color[bg]};
  font-size: 0.8rem;
  height: 2em;
  width: 3.2em;
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  & + & {
    margin-left: 0.5em;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 0.5em 0.3em;
  width: calc(100% - 1em);
  align-items: center;

  .profile__container {
    margin-bottom: auto;
  }
  .content {
    width: 100%;
  }
  .button__container {
    width: fit-content;
    margin-left: auto;
    display: flex;
  }
  .text__container {
    margin-left: 0.5em;
  }
  strong {
    color: ${({ theme }) => theme.color.brandColor};
    font-size: 1.2rem;
  }
  img {
    max-width: 2.5rem;
    max-height: 2.5rem;
    width: 100%;
    height: 100%;
  }
  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.subText};
  }
`;
