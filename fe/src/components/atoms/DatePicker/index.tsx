import React from 'react';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
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
}
export interface IButton {
  onClick?: any;
}
export interface ICustomInput {
  value?: any;
  onClick?: any;
}

const CustomInput = ({ value, onClick }: ICustomInput) => {
  return (
    <button onClick={onClick} type="button" className="btn-date">
      {value}
    </button>
  );
};
const DatePicker = ({ date, onChange, name = 'startDate' }: IDatePicker) => {
  return (
    <S.Container id="date-picker">
      <ReactDatePicker
        selected={date}
        customInput={<CustomInput />}
        onChange={(d: Date) => onChange(d, name)}
        className="my-react-picker"
        locale={ko}
        dateFormat="yy.MM.dd"
        popperPlacement="auto"
        popperModifiers={{ preventOverflow: { enabled: true } }}
      />
    </S.Container>
  );
};

export default DatePicker;
