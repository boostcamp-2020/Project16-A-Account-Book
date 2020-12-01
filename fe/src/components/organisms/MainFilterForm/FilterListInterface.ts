import { ReactElement } from 'react';

export default interface IFilterList {
  filterTitle: string;
  title?: string;
  children?: ReactElement | ReactElement[] | string;
}
