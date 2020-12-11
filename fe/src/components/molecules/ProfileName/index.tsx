import React from 'react';
import * as S from './style';

export interface Props {
  imgUrl: string;
  name: string;
}

const ProfileName = ({ imgUrl, name }: Props): React.ReactElement => {
  return (
    <S.ProfileName>
      <S.Profile icon={imgUrl} size="md" />
      {name}
    </S.ProfileName>
  );
};

export default ProfileName;
