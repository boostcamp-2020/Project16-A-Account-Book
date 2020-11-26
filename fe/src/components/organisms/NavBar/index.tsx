import React from 'react';
import IconButton from 'components/molecules/IconButton';
import homeSvg from 'assets/svg/home.svg';
import graphSvg from 'assets/svg/graph.svg';
import calendarSvg from 'assets/svg/calendar.svg';
import tagSvg from 'assets/svg/tag.svg';
import plusSvg from 'assets/svg/plus.svg';
import * as S from './style';

const NavBar = ({ ...props }): React.ReactElement => {
  return (
    <S.NavBar {...props}>
      <IconButton icon={homeSvg}>홈</IconButton>
      <IconButton icon={graphSvg}>통계</IconButton>
      <S.PlusButton icon={plusSvg} />
      <IconButton icon={calendarSvg}>달력</IconButton>
      <IconButton icon={tagSvg}>태그</IconButton>
    </S.NavBar>
  );
};

export default NavBar;
