/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { IInvitaion } from 'components/organisms/InvitationList';
import * as S from './style';

export interface Prop extends IInvitaion {
  onClick?: any;
}

const InvitationItem = ({
  accountObjId,
  host,
  ownerName,
  title,
  accountProfile,
  onClick,
}: Prop) => {
  return (
    <S.Container>
      <div className="profile__container">
        <S.UserProfileImage icon={accountProfile} />
      </div>
      <div className="content">
        <div className="text__container">
          <p>{host}님께서</p>
          <p>
            <strong>
              {ownerName}/{title}
            </strong>
            에&nbsp;초대하였습니다.
          </p>
        </div>

        <div className="button__container">
          <S.Button
            type="button"
            value="수락"
            data-id={accountObjId}
            data-approve="true"
            onClick={onClick}
            bg="brandColor"
          />
          <S.Button
            type="button"
            value="거절"
            data-id={accountObjId}
            data-approve="false"
            onClick={onClick}
            bg="red"
          />
        </div>
      </div>
    </S.Container>
  );
};

export default InvitationItem;
