/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TransactionStore } from 'stores/Transaction';
import bell from 'assets/svg/bell.svg';
import useVisible from 'hooks/useVisible';
import Modal from 'components/molecules/ModalContainer';
import * as S from './style';
import InvitationList from '../InvitationList';

export interface Props {
  title?: string;
  back?: boolean;
}

const onClickHandler = () => {
  TransactionStore.setAccountObjId('');
};
const BackButton = (goBack: any) => (
  <div className="btn-back" onClick={goBack}>
    <p>뒤로가기</p>
  </div>
);
const HeaderBar = ({
  title = 'N석봉',
  back = false,
  ...props
}: Props): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, toggleModal] = useVisible(ref);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const onClickVisible = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleModal();
  };

  return (
    <S.HeaderBar {...props}>
      <div className="content">
        {back && BackButton(goBack)}

        <Link to="/accounts" onClick={onClickHandler}>
          {title}
        </Link>
        <S.Icon icon={bell} onClick={onClickVisible} />
      </div>
      {visible && (
        <>
          <Modal>
            <div ref={ref}>
              <InvitationList />
            </div>
          </Modal>
        </>
      )}
    </S.HeaderBar>
  );
};

export default HeaderBar;
