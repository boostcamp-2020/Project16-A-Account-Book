import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import bell from 'assets/svg/bell.svg';
import useVisible from 'hooks/useVisible';
import Modal from 'components/molecules/ModalContainer';
import * as S from './style';
import InvitationList from '../InvitationList';

export interface Props {
  title?: string;
}
const src = 'https://avatars3.githubusercontent.com/u/44409642?s=88&v=4';

const dummy = [
  { title: 'one', owner: '주인', accountProfile: src },
  { title: 'two', owner: '주인1', accountProfile: src },
  { title: 'three', owner: '주인2', accountProfile: src },
  { title: 'four', owner: '주인3', accountProfile: src },
  { title: 'four', owner: '주인3', accountProfile: src },
  { title: 'four', owner: '주인3', accountProfile: src },
  { title: 'four', owner: '주인3', accountProfile: src },
];
const onClickHandler = () => {
  TransactionStore.setAccountObjId('');
};

const HeaderBar = ({
  title = 'N석봉',
  ...props
}: Props): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, toggleModal] = useVisible(ref);
  const onClickVisible = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleModal();
  };
  return (
    <S.HeaderBar {...props}>
      <div className="content">
        <Link to="/accounts" onClick={onClickHandler}>
          {title}
        </Link>
        <S.Icon icon={bell} onClick={onClickVisible} />
      </div>
      {visible && (
        <>
          <Modal>
            <div ref={ref}>
              <InvitationList list={dummy} onClick={() => {}} />
            </div>
          </Modal>
        </>
      )}
    </S.HeaderBar>
  );
};

export default HeaderBar;
