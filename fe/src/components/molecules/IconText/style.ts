import IconAtom from 'components/atoms/Icons';
import styled from 'styled-components';

export const Icon = styled(IconAtom)`
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  justify-content: flex-start;
  margin: 0.3rem 0;
  &:hover {
    transform: scale(1.2);
  }
  .icontext {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${Icon} + .icontext {
    margin-left: 1em;
  }
`;
