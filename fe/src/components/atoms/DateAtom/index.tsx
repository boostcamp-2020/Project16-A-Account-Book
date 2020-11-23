import React from 'react';
import parseDate from 'utils/parseDate';
import { DateAtom } from './style';

export interface Props {
  parseString?: string;
  date: Date;
}

const App = ({ parseString = 'ymdz', date, ...props }: Props) => {
  return <DateAtom {...props}>{parseDate(date, parseString)}</DateAtom>;
};

export default App;
