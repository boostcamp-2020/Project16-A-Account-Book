import styled from 'styled-components';
import IconButton from 'components/molecules/IconButton';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PlusButton = styled(IconButton)`
  padding: 0.1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.emerald};
`;
