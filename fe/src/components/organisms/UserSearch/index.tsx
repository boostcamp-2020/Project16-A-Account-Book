import React, { useState } from 'react';
import * as S from './style';

const title = '검색하기';
const UserSearch = () => {
  const [searchUser, setSearchUser] = useState<string>('');

  const onChangeHandler = (e: any) => {
    e.preventDefault();
    setSearchUser(e.target.value);
  };

  const onSearchHandler = () => {
    console.log(searchUser, 'searching..');
  };

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.InviteUser>
        <S.UserSearch onChange={onChangeHandler} />
        <S.SearchButton value="검색" onClick={onSearchHandler} />
      </S.InviteUser>
    </>
  );
};

export default UserSearch;
