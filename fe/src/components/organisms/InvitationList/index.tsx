import React, { useEffect, useState } from 'react';
import InvitationItem from 'components/molecules/InvitationItem';
import userAPI from 'apis/user';
import Container from './style';

export interface IInvitaion {
  accountObjId: string;
  title: string;
  accountProfile: string;
  ownerName: string;
  host: string;
}
export interface Prop {
  onClick?: any;
}
const InvitationList = ({ onClick }: Prop) => {
  const [invitationList, setinvitationList] = useState<IInvitaion[]>([]);
  const initialState = async () => {
    const res = await userAPI.getUserInvitation();
    setinvitationList(res);
  };
  useEffect(() => {
    initialState();
  }, []);
  const invitations = invitationList.map((invitation) => {
    return <InvitationItem {...invitation} onClick={onClick} />;
  });
  return (
    <Container>
      <h2>초대내역</h2>
      {invitations}
    </Container>
  );
};

export default InvitationList;
