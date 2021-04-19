/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Props as ButtonProps } from 'components/atoms/Button';
import ProileName from 'components/molecules/ProfileName';
import * as S from './style';
import CheckBox from '../Checkbox';

export interface Props extends ButtonProps {
  onClick: any;
  dataList: any[];
  checkList?: string[];
  children?: React.ReactElement | React.ReactElement[] | string;
  type?: string;
}

const DropdownBody = ({
  dataList = [],
  size,
  onClick,
  checkList,
  type,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.DropdownBodyWrap>
      <div
        onClick={() => onClick({ id: 'ALL', type })}
        className="dropdown-item"
      >
        <span>모두 선택</span>
        <S.CheckBoxContainer>
          <CheckBox checked={dataList.length === checkList?.length} />
        </S.CheckBoxContainer>
      </div>

      {dataList.map(
        (data: any): React.ReactElement => (
          <div
            onClick={() => onClick({ ...data, ...props, type })}
            key={data.id}
            className="dropdown-item"
          >
            {data.title ? (
              data.title
            ) : (
              <ProileName imgUrl={data.profileUrl} name={data.nickName} />
            )}
            <S.CheckBoxContainer>
              <CheckBox
                checked={!!checkList?.find((x: string) => x === data.id)}
              />
            </S.CheckBoxContainer>
          </div>
        ),
      )}
    </S.DropdownBodyWrap>
  );
};

export default DropdownBody;
