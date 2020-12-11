import React from 'react';
import InvitationItem from 'components/molecules/InvitationItem';
import Container from './style';

export interface Prop {
  list: any[];
  onClick?: any;
}
const InvitationList = ({ list, onClick }: Prop) => {
  const invitations = list.map((invitation) => {
    return <InvitationItem {...invitation} onClick={onClick} />;
  });
  return <Container>{invitations}</Container>;
};

export default InvitationList;
