import styled from 'styled-components';
import IconComponent from 'components/atoms/MoveIcon';

export const Icon = styled(IconComponent)`
  border-radius: 2rem;
  margin-right: -1rem;
  transition: 0.5s;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 100%;
  :hover {
    & > ${Icon}:not(:first-child) {
      margin-right: 0rem;
    }
  }
`;
