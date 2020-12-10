/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as S from './style';

export interface Prop {
  owner: string;
  title: string;
  accountProfile: string;
  onClick?: any;
}

const InvitationItem = ({ owner, title, accountProfile, onClick }: Prop) => {
  return (
    <S.Container>
      <div className="profile__container">
        <S.UserProfileImage icon={accountProfile} />
      </div>
      <div className="content">
        <div className="text__container">
          <p>{owner}님께서</p>
          <p>
            <strong>{title}</strong>에&nbsp;초대하였습니다.
          </p>
        </div>

        <div className="button__container">
          <S.Button
            type="button"
            value="수락"
            onClick={onClick}
            bg="brandColor"
          />
          <S.Button type="button" value="거절" onClick={onClick} bg="red" />
        </div>
      </div>
    </S.Container>
  );
};

export default InvitationItem;
