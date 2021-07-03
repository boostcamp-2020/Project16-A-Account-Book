import React from 'react';
import * as S from './style';

export interface Props {
  profileImgList: any;
}

const ProfileImgList = ({ profileImgList, ...props }: Props) => {
  const ImgList = profileImgList.map((el: any, index: number) => {
    const key = el + index;
    return <S.Icon key={key} rightMargin={index} icon={el} size="lg" />;
  });
  return <S.Wrap {...props}>{ImgList}</S.Wrap>;
};

export default ProfileImgList;
