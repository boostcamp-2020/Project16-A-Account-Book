import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';

interface Props {
  title?: String;
  disabled?: boolean;
  children: React.ReactElement | React.ReactElement[] | string;
}
const arrowCharacter = '▾';

const DropdownButtonHeader = ({
  title = '',
  children,
  disabled = false,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const outsideClickHandler = (event: any) => {
    if (!dropdownContainer.current) return;
    if (
      dropdownContainer &&
      !dropdownContainer.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', outsideClickHandler);
    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  });

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <S.Container ref={dropdownContainer}>
      <S.DropdownButton onClick={toggleVisible} disabled={disabled}>
        <div>{`${title} ${arrowCharacter}`}</div>
      </S.DropdownButton>
      {visible && children}
    </S.Container>
  );
};

export default DropdownButtonHeader;
