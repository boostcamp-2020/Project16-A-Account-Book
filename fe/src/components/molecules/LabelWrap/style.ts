import styled from 'styled-components';

export const LabelWrap = styled.div`
  display: ${({ visible }: { visible: boolean }) =>
    visible ? 'flex' : 'none'};
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex: 1 1 30%;
  padding: 1rem;

  align-items: center;
`;

export const Contents = styled.div`
  flex: 2 1 70%;
`;
