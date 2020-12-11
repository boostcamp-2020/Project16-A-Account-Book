import React from 'react';
import TextBox from './style';

export interface Props {
  chat: string;
  type: string;
}

const Corpus = ({ chat, type }: Props) => {
  return <TextBox type={type}>{chat}</TextBox>;
};

export default Corpus;
