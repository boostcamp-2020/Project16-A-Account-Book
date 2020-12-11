import React from 'react';
import * as S from './style';

export interface Props {
  profileImgList: any;
}

const ProfileImgList = ({ profileImgList, ...props }: Props) => {
  const ImgList = profileImgList.map((el: any, index: number) => {
    return <S.Icon key={el} rightMargin={index} icon={el} size="lg" />;
  });
  return <S.Wrap {...props}>{ImgList}</S.Wrap>;
};

export default ProfileImgList;
