import React from 'react';
import IconButton from 'components/molecules/IconButton';
import homeSvg from 'assets/svg/home.svg';
import graphSvg from 'assets/svg/graph.svg';
import calendarSvg from 'assets/svg/calendar.svg';
import tagSvg from 'assets/svg/tag.svg';
import plusSvg from 'assets/svg/plus.svg';
import { Link } from 'react-router-dom';
import * as S from './style';

const NavBar = ({ ...props }): React.ReactElement => {
  const { title } = JSON.parse(sessionStorage.getItem('account') || '');
  return (
    <S.NavBar {...props}>
      <IconButton icon={homeSvg}>홈</IconButton>
      <IconButton icon={graphSvg}>통계</IconButton>
      <Link to={`/transactions/${title}/create`}>
        <S.PlusButton icon={plusSvg} />
      </Link>
      <IconButton icon={calendarSvg}>달력</IconButton>
      <IconButton icon={tagSvg}>태그</IconButton>
    </S.NavBar>
  );
};

export default NavBar;
