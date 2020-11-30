import React, { useRef } from 'react';
import useVisible from 'hooks/useVisible';

import * as S from './style';

interface Props {
  title?: String;
  disabled?: boolean;
  border?: boolean;
  children: React.ReactElement | React.ReactElement[] | string;
}
const arrowCharacter = '▾';

const DropdownButtonHeader = ({
  title = '',
  children,
  border = false,
  disabled = false,
}: Props) => {
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const [visible, toogleVisivle] = useVisible(dropdownContainer);

  return (
    <S.Container ref={dropdownContainer} border={border}>
      <S.DropdownButton onClick={toogleVisivle} disabled={disabled}>
        <div>{`${title} ${arrowCharacter}`}</div>
      </S.DropdownButton>
      {visible && children}
    </S.Container>
  );
};

export default DropdownButtonHeader;
