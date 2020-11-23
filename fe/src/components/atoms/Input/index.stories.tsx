import React from 'react';

import Input from '.';

export default {
  title: 'Atoms / Input',
};

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value);
};

export const defaultInput: React.FC = () => {
  return (
    <Input
      color="white"
      disabled={false}
      placeholder="입력하세요"
      defaultValue="default"
      onChangeHandler={onChangeHandler}
    />
  );
};

export const disabledInput: React.FC = () => {
  return (
    <Input
      color="gray"
      disabled
      placeholder=""
      defaultValue="disabled"
      onChangeHandler={onChangeHandler}
    />
  );
};
