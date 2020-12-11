import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from 'components/molecules/IconButton';

export interface Props {}

export const HeaderBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.brandColor};
  display: flex;
  justify-content: center;
  align-items: center;
  > .content {
    width: 80vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkTag = styled(Link)`
  :hover {
    background-color: green;
  }
`;

export const Icon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: -2px;
  background: transparent;
`;
