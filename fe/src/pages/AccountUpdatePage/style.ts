import styled from 'styled-components';

const UserContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 1rem 0.3rem;
  background: ${({ theme }) => theme.color.grayBackground};
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
export const UserList = styled.div`
  > h2 {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;
export default UserContainer;
