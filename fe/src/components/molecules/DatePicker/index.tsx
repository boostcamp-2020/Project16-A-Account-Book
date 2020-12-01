import React from 'react';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import DateRange from '../DateRange';
import * as S from './style';

registerLocale('ko', ko);
setDefaultLocale('ko');
export interface IDatePicker {
  dates: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onChange: any;
}
export interface IButton {
  onClick?: any;
}

const DatePicker = ({ dates, onChange }: IDatePicker) => {
  return (
    <S.Container id="date-picker">
      <DateRange dates={dates} />
      <ReactDatePicker
        selected={dates.startDate}
        onChange={onChange}
        startDate={dates.startDate}
        endDate={dates.endDate}
        selectsRange
        inline
        className="my-react-picker"
        locale={ko}
        popperPlacement="auto"
        popperModifiers={{ preventOverflow: { enabled: true } }}
      />
    </S.Container>
  );
};

export default DatePicker;
