import React from 'react';
import InvitationItem from 'components/molecules/InvitationItem';
import Container from './style';

export interface Prop {
  list: any[];
  onClick?: any;
}
const InvitationList = ({ list, onClick }: Prop) => {
  const invitations = list.map((l) => {
    return <InvitationItem {...l} onClick={onClick} />;
  });
  return <Container>{invitations}</Container>;
};

export default InvitationList;
