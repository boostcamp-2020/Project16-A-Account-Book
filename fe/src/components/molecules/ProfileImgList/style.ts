import styled from 'styled-components';
import IconComponent from 'components/atoms/MoveIcon';

export const Icon = styled(IconComponent)`
  border-radius: 2rem;
  margin-right: -1.2rem;
  transition: 0.5s;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 1.6rem;
  :hover {
    & > ${Icon}:not(:first-child) {
      margin-right: 0rem;
    }
  }
`;
