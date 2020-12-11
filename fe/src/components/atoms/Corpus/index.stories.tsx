import React from 'react';
import Corpus from '.';

export default {
  title: 'atoms / Corpus',
};

export const TextedCorpus = () => {
  return <Corpus type="mine" chat="뭐해?" />;
};
const manyText =
  'sometimes forest fires makes smokes too and we have to decide what todo';

export const ManyTextedCorpus = () => {
  return <Corpus type="mine" chat={manyText} />;
};
