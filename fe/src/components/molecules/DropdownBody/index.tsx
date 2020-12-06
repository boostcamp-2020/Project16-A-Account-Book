import React from 'react';
import { Props as ButtonProps } from 'components/atoms/Button';
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
  ...props
}: Props): React.ReactElement => {
  return (
    <S.DropdownBodyWrap>
      {dataList.map(
        (data: any): React.ReactElement => (
          <S.DropdownItem
            value={data}
            key={data.objectId}
            onClick={() => onClick({ ...data, ...props })}
            {...props}
          >
            <span>{data.title}</span>
            <S.CheckBoxContainer>
              <CheckBox
                checked={!!checkList?.find((x: string) => x === data._id)}
              />
            </S.CheckBoxContainer>
          </S.DropdownItem>
        ),
      )}
    </S.DropdownBodyWrap>
  );
};

export default DropdownBody;
