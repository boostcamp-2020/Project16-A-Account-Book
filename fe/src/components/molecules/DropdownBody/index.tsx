import React from 'react';
import { Props as ButtonProps } from 'components/atoms/Button';
import * as S from './style';

export interface Props extends ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  dataList: (string | number)[];
  children?: React.ReactElement | string;
}

const DropdownBody = ({
  dataList = [],
  size,
  onClick,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.DropdownBodyWrap>
      {dataList.map(
        (data: string | number): React.ReactElement => (
          <S.DropdownItem value={data} key={data} onClick={onClick} {...props}>
            <span>{data}</span>
          </S.DropdownItem>
        ),
      )}
    </S.DropdownBodyWrap>
  );
};

export default DropdownBody;
