import React from 'react';
import IconButton from 'components/molecules/IconButton';
import homeSvg from 'assets/svg/home.svg';
import graphSvg from 'assets/svg/graph.svg';
import calendarSvg from 'assets/svg/calendar.svg';
import tagSvg from 'assets/svg/tag.svg';
import plusSvg from 'assets/svg/plus.svg';
import { Link, useParams, useLocation } from 'react-router-dom';
import * as S from './style';

type Params = {
  title: string;
  owner: string;
};
const NavBar = ({ ...props }): React.ReactElement => {
  const { title, owner } = useParams<Params>();
  const location = useLocation();
  const nowPath = location.pathname.split('/')[4];

  const baseUrl = `/transactions/${owner}/${title}`;
  return (
    <S.NavBar {...props}>
      <Link to={`${baseUrl}`}>
        <IconButton
          className={nowPath === undefined ? 'active' : ''}
          icon={homeSvg}
        >
          홈
        </IconButton>
      </Link>
      <Link to={`${baseUrl}/statistics`}>
        <IconButton
          className={nowPath === 'statistics' ? 'active' : ''}
          icon={graphSvg}
        >
          통계
        </IconButton>
      </Link>
      <Link to={`${baseUrl}/create`}>
        <S.PlusButton icon={plusSvg} />
      </Link>
      <Link to={`${baseUrl}/calendar`}>
        <IconButton
          className={nowPath === 'calendar' ? 'active' : ''}
          icon={calendarSvg}
        >
          달력
        </IconButton>
      </Link>
      <Link to={`${baseUrl}/category`}>
        <IconButton
          className={nowPath === 'category' ? 'active' : ''}
          icon={tagSvg}
        >
          태그
        </IconButton>
      </Link>
    </S.NavBar>
  );
};

export default React.memo(NavBar);
