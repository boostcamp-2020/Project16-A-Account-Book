import React from 'react';
import DropdownHeader, { Props as IDropdownHeader } from '../DropdownHeader';
import DropdownBody, { Props as IDropdownBody } from '../DropdownBody';

export interface IDropdown extends IDropdownHeader, IDropdownBody {}
const Dropdown = ({ title, dataList, onClick, ...props }: IDropdown) => {
  return (
    <DropdownHeader title={title} border {...props}>
      <DropdownBody dataList={dataList} onClick={onClick} {...props} />
    </DropdownHeader>
  );
};

export default Dropdown;
