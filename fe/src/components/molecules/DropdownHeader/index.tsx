import React, { useRef } from 'react';
import useVisible from 'hooks/useVisible';
import ModalContainer from '../ModalContainer';

import * as S from './style';

export interface Props {
  title?: String;
  disabled?: boolean;
  border?: boolean;
  children?: React.ReactElement | React.ReactElement[] | string;
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
  const onClickVisible = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toogleVisivle();
  };
  return (
    <S.Container border={border}>
      <S.DropdownButton onClick={onClickVisible} disabled={disabled}>
        <div>{`${title} ${arrowCharacter}`}</div>
      </S.DropdownButton>
      {visible && (
        <ModalContainer>
          <div ref={dropdownContainer}>{children}</div>
        </ModalContainer>
      )}
    </S.Container>
  );
};

export default DropdownButtonHeader;
