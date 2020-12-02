import React from 'react';
import TextBox from './style';

export interface Props {
  chat: string;
}

const Corpus = ({ chat }: Props) => {
  return <TextBox>{chat}</TextBox>;
};

export default Corpus;
