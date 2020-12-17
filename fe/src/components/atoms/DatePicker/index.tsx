import React from 'react';
import ReactDatePicker, {
  setDefaultLocale,
  registerLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import * as S from './style';

registerLocale('ko', ko);
setDefaultLocale('ko');
export interface IDatePicker {
  date: Date | null;
  name?: string;
  onChange: any;
  disabled: boolean;
}
export interface IButton {
  onClick?: any;
}

const DatePicker = ({
  date,
  onChange,
  name = 'startDate',
  disabled,
}: IDatePicker) => {
  return (
    <S.Container id="date-picker">
      <ReactDatePicker
        selected={date}
        onChange={(d: Date) => onChange(d, name)}
        className="my-react-picker"
        locale={ko}
        disabled={disabled}
        dateFormat="yy.MM.dd"
        popperPlacement="auto"
        popperModifiers={{ preventOverflow: { enabled: true } }}
      />
    </S.Container>
  );
};

export default DatePicker;
