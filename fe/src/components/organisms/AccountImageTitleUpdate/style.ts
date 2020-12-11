import styled from 'styled-components';
import IconComponent from 'components/atoms/Icons';
import ButtonComponent from 'components/atoms/Button';
import Input from 'components/atoms/Input';

export const AccountImageTitleUpdate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color.grayBackground};

  .imageWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    width: 20%;
  }

  .textWrap {
    display: flex;
    flex-direction: column;
    margin-left: 0.8em;
    width: 90%;
  }
  .title {
    margin-top: 1.5em;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }
`;

export const Icon = styled(IconComponent)`
  border-radius: 2rem;
  width: 2rem;
  height: 2rem;
  margin: 2em 0 0.5em 0;
`;

export const UploadBtn = styled(ButtonComponent)`
  width: 4rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.color.brandColor};
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 1em;
`;

export const TitleInput = styled(Input)`
  width: 90%;
`;
export default {};
