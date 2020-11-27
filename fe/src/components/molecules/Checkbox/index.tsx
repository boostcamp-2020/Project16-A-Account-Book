import React from 'react';
import Icon from 'components/atoms/Icons';
import checkIcon from 'assets/svg/check.svg';
import CheckboxContainer from './style';

interface Prop {
  checked?: boolean;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Checkbox = ({ checked = false, size = 'sm', onClick }: Prop) => {
  return (
    <CheckboxContainer checked={checked} onClick={onClick}>
      <Icon icon={checkIcon} size={size} />
    </CheckboxContainer>
  );
};

export default Checkbox;
