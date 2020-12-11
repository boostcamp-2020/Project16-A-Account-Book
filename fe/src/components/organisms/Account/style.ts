import styled from 'styled-components';
import IconComponent from 'components/atoms/Icons';
import ProfileImgList from 'components/molecules/ProfileImgList';

export const Account = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid black;
  margin-top: 1rem;
  align-items: center;
  padding: 0 1rem;
  :hover {
    cursor: pointer;
  }

  .text {
    width: 65%;
  }

  .settingIcon {
    width: 2rem;
    height: 2rem;
    z-index: 1;
  }
`;

export const Icon = styled(IconComponent)`
  margin-right: 1rem;
`;

export const Setting = styled(IconComponent)`
  margin-right: 1rem;
`;

export const ProfileList = styled(ProfileImgList)`
  width: 12rem;
`;
