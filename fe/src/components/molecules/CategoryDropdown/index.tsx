import React from 'react';
import { Props as ButtonProps } from 'components/atoms/Button';
import * as S from './style';

export interface Props extends ButtonProps {
  dropDownItemClicked: any;
  dataList: (string | number)[];
  children?: React.ReactElement | React.ReactElement[] | string;
  type?: string;
  isClicked: boolean;
  deleteClicked: any;
}

const CategoryDropdown = ({
  dataList = [],
  size,
  isClicked,
  dropDownItemClicked,
  deleteClicked,
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
                dropDownItemClicked(data._id);
              }}
              type="button"
              value="수정"
            />
            <S.TitleSpan key={data.objectId}>{data.title}</S.TitleSpan>
            <S.CategoryEditButton
              key={data._id}
              isClicked={isClicked}
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                deleteClicked(data._id);
              }}
              type="button"
              value="삭제"
            />
          </S.DropdownItem>
        ),
      )}
    </S.DropdownBodyWrap>
  );
};

export default CategoryDropdown;
