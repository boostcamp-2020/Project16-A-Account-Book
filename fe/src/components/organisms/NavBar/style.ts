import styled from 'styled-components';
import IconButton from 'components/molecules/IconButton';

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  button {
    padding: 1.2em;
    background-color: transparent;
    width: 4rem;
    height: 4rem;
  }
  button.active {
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.transparentBrandColor};
  }
`;

export const PlusButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  padding: 0.1rem !important;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.brandColor};
`;
