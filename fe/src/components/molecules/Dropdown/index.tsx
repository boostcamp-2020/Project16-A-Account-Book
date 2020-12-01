import React from 'react';
import DropdownHeader, { Props as IDropdownHeader } from '../DropdownHeader';
import DropdownBody, { Props as IDropdownBody } from '../DropdownBody';

export interface IDropdown extends IDropdownHeader, IDropdownBody {}
const Dropdown = ({ title, dataList, onClick }: IDropdown) => {
  return (
    <DropdownHeader title={title} border>
      <DropdownBody dataList={dataList} onClick={onClick} />
    </DropdownHeader>
  );
};

export default Dropdown;
