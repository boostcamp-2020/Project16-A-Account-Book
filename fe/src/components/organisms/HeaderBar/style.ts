import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface Props {}

export const HeaderBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.brandColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkTag = styled(Link)`
  :hover {
    background-color: green;
  }
`;
