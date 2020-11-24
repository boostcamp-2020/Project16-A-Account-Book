import React, { useState } from 'react';
import DropdownButton from './style';

interface Props {
  title?: String;
  children: React.ReactElement;
}
const arrowCharacter = '▾';

const DropdownButtonHeader = ({ title = '', children }: Props) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <DropdownButton onClick={toggleVisible}>
        <div>{`${title} ${arrowCharacter}`}</div>
      </DropdownButton>
      {visible && children}
    </div>
  );
};

export default DropdownButtonHeader;
