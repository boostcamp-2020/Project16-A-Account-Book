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
  const baseUrl = `/transactions/${title}`;
  return (
    <S.NavBar {...props}>
      <Link to={`${baseUrl}`}>
        <IconButton icon={homeSvg}>홈</IconButton>
      </Link>
      <Link to={`${baseUrl}/statistics`}>
        <IconButton icon={graphSvg}>통계</IconButton>
      </Link>
      <Link to={`${baseUrl}/create`}>
        <S.PlusButton icon={plusSvg} />
      </Link>
      <IconButton icon={calendarSvg}>달력</IconButton>
      <IconButton icon={tagSvg}>태그</IconButton>
    </S.NavBar>
  );
};

export default NavBar;
