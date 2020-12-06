import React from 'react';
import { Props as ButtonProps } from 'components/atoms/Button';
import * as S from './style';

export interface Props extends ButtonProps {
  dropDownItemClicked: any;
  dataList: (string | number)[];
  children?: React.ReactElement | React.ReactElement[] | string;
  type?: string;
  isClicked: boolean;
}

const CategoryDropdown = ({
  dataList = [],
  size,
  isClicked,
  dropDownItemClicked,
  ...props
}: Props): React.ReactElement => {
  return (
    <S.DropdownBodyWrap>
      {dataList.map(
        (data: any): React.ReactElement => (
          <S.DropdownItem value={data} key={data._id} {...props}>
            <S.CategoryEditButton
              key={data._id}
              isClicked={isClicked}
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                dropDownItemClicked(data._id, data.title);
              }}
            />
            <span key={data.objectId}>{data.title}</span>
          </S.DropdownItem>
        ),
      )}
    </S.DropdownBodyWrap>
  );
};

export default CategoryDropdown;
