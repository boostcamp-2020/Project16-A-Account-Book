import styled from 'styled-components';

export const Container = styled.section``;
export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const Label = styled.div`
  margin: 0.3em 0;
  > small {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.brandColor};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  .head-container {
    display: flex;
    align-items: center;
    > p {
      padding: 0 0.5em;
    }
  }

  & + & {
    margin-top: 0.3em;
  }
`;

export const Box = styled.div`
  & + & {
    margin-top: 2rem;
  }
`;
