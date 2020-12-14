import React, { useEffect, useState } from 'react';
import InvitationItem from 'components/molecules/InvitationItem';
import userAPI from 'apis/user';
import Container from './style';

export interface IInvitaion {
  accountObjId: string;
  title: string;
  imageUrl: string;
  ownerName: string;
  host: string;
}
export interface Prop {
  onClick?: any;
}
const InvitationList = () => {
  const [invitationList, setinvitationList] = useState<IInvitaion[]>([]);
  const onClickAgreeAndDeny = async (e: any) => {
    const { id, approve } = e.target.dataset;
    const api =
      approve === 'true' ? userAPI.agreeInvitation : userAPI.denyInvitation;
    await api(id);
    const message = approve === 'true' ? '수락되었습니다' : '거절되었습니다';
    alert(message);
  };
  const initialState = async () => {
    const res = await userAPI.getUserInvitation();
    setinvitationList(res);
  };
  useEffect(() => {
    initialState();
  }, []);
  const invitations = invitationList.map((invitation) => {
    return <InvitationItem {...invitation} onClick={onClickAgreeAndDeny} />;
  });
  return (
    <Container>
      <h2>초대내역</h2>
      {invitations}
    </Container>
  );
};

export default InvitationList;
