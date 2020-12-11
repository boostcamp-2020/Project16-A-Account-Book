import React from 'react';
import { IDropdown } from 'components/molecules/Dropdown';
import personSvg from 'assets/svg/person.svg';
import * as S from './style';

const dropdownTitle = '초대할 사용자를 선택하세요';
const title = '초대하기';
const InviteUser = ({ onClick, dataList, checkList, ...props }: IDropdown) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.InviteUser>
        <S.UserIcon icon={personSvg} size="xl" />
        <S.UserDropdown
          title={dropdownTitle}
          dataList={dataList}
          checkList={checkList}
          onClick={onClick}
          {...props}
        />
      </S.InviteUser>
    </>
  );
};

export default InviteUser;
