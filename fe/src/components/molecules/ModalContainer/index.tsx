import React from 'react';
import Container from './style';

export interface Prop {
  justify?: 'left' | 'right' | 'center';
  align?: 'up' | 'down' | 'center';
  children?: React.ReactElement | React.ReactElement[] | string;
}
const ModalContainer = ({
  children,
  justify = 'center',
  align = 'center',
}: Prop) => {
  return (
    <Container justify={justify} align={align}>
      <div className="modal-content">{children}</div>
    </Container>
  );
};

export default ModalContainer;
