import React from 'react';
import parseDate from 'utils/parseDate';
import { DateAtomStyle } from './style';

export interface Props {
  parseString?: string;
  date: Date;
}

const DateAtom = ({ parseString = 'ymdz', date, ...props }: Props) => {
  return (
    <DateAtomStyle {...props}>{parseDate(date, parseString)}</DateAtomStyle>
  );
};

export default DateAtom;
