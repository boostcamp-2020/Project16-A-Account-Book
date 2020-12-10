import React from 'react';
import InvitationItem from 'components/molecules/InvitationItem';
import Container from './style';

export interface Prop {
  list: any[];
}
const InvitationList = ({ list }: Prop) => {
  const invitations = list.map((l) => {
    return <InvitationItem {...l} />;
  });
  return <Container>{invitations}</Container>;
};

export default InvitationList;
