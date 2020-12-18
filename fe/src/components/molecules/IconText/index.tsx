import React from 'react';
import * as S from './style';

export interface IIconText {
  icon: string;
  text: string;
}

const IconText = ({ icon, text }: IIconText) => {
  return (
    <S.Container>
      <S.Icon icon={icon} size="lg" />
      <div className="icontext" title={text}>
        {text}
      </div>
    </S.Container>
  );
};
export default IconText;
