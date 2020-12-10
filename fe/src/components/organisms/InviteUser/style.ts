import styled from 'styled-components';
import Dropdown from 'components/molecules/Dropdown';
import Icon from 'components/atoms/Icons';

export const InviteUser = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.grayBackground};
`;

export const UserDropdown = styled(Dropdown)`
  flex: 0.9 0 auto;
`;

export const UserIcon = styled(Icon)`
  flex: 0.1 1 auto;
`;

export const Title = styled.div`
  margin: 1rem 0;
  font-size: large;
`;
