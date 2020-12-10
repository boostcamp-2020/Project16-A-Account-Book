import styled from 'styled-components';
import IconComponent from 'components/atoms/Icons';
import ProfileImgList from 'components/molecules/ProfileImgList';

export const Account = styled.div`
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
`;

export const Icon = styled(IconComponent)`
  margin-right: 1rem;
`;

export const ProfileList = styled(ProfileImgList)``;
