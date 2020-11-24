import React, { useState, useRef, useEffect } from 'react';
import DropdownButton from './style';

interface Props {
  title?: String;
  children: React.ReactElement;
}
const arrowCharacter = '▾';

const DropdownButtonHeader = ({ title = '', children }: Props) => {
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
    <div ref={dropdownContainer}>
      <DropdownButton onClick={toggleVisible}>
        <div>{`${title} ${arrowCharacter}`}</div>
      </DropdownButton>
      {visible && children}
    </div>
  );
};

export default DropdownButtonHeader;
