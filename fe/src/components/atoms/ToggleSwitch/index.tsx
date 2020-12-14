import React from 'react';
import * as S from './style';

export interface Props {
  selected: boolean;
  setSelected?: any;
  className?: string;
}

const onClickHandler = (selected: boolean, setSelected: any) => () => {
  setSelected(!selected);
};

const ToggleSwitch = ({ selected, setSelected, className }: Props) => {
  return (
    <S.ToggleSwitch
      onClick={onClickHandler(selected, setSelected)}
      className={className}
    >
      <div className={`circle ${selected ? 'active' : ''}`} />
    </S.ToggleSwitch>
  );
};

export default ToggleSwitch;
