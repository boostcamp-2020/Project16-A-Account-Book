import styled from 'styled-components';

export const ToggleSwitch = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2.8rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.color.lightBorder};
  background-color: ${({ theme }) => theme.color.brandColor};
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
  .circle {
    position: absolute;
    top: 0px;
    right: -0.5px;
    background-color: white;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.75rem;
    transition: 0.3s;
  }

  .circle.active {
    right: 1.32rem;
  }
`;

export default {};
