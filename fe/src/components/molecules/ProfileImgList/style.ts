import styled from 'styled-components';
import IconComponent from 'components/atoms/MoveIcon';

export const Icon = styled(IconComponent)`
  border-radius: 2rem;
  position: absolute;
  right: ${({ rightMargin }: any) => {
    return rightMargin;
  }}rem;
  transition: 0.5s;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  :hover {
    & > :nth-child(2) {
      right: 2.5rem;
    }
    & > :nth-child(3) {
      right: 5rem;
    }
    & > :nth-child(4) {
      right: 7.5rem;
    }
    & > :nth-child(5) {
      right: 10rem;
    }
  }
`;
