import styled from 'styled-components';
import Input from 'components/atoms/Input';

export const Title = styled.div`
  margin: 1rem 0;
  font-size: large;
`;

export const InviteUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.grayBackground};
`;

export const UserSearch = styled.input`
  height: 16px;
  width: 70%;
  background-color: ${({ theme }) => theme.color.white};
`;

export const SearchButton = styled(Input)`
  text-align: center;
  width: 10%;
`;
