import { ReactElement } from 'react';

export default interface IFilterList {
  filterTitle: string;
  disabled?: boolean;
  onClick?: any;
  children?: ReactElement | ReactElement[] | string;
}
