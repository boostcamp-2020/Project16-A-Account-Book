import React from 'react';
import DataPicker, { IDatePicker } from '../../../molecules/DatePicker';
import * as S from '../style';

interface IModal extends IDatePicker {
  ref: any;
}

const Modal = ({ dates, onChange, ref }: IModal) => {
  return (
    <S.Model>
      <div ref={ref}>
        <DataPicker dates={dates} onChange={onChange} />
      </div>
    </S.Model>
  );
};

export default Modal;
