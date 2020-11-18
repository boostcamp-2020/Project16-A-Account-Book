import React from 'react';
import Input from '.';

export default {
  title: 'Atoms / Input',
};

export const defaultInput: React.FC = () => {
  return <Input color="white" disabled={false} placeholder="입력하세요" />;
};

export const disabledInput: React.FC = () => {
  return <Input color="gray" disabled placeholder="" />;
};
