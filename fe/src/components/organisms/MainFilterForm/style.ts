import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';

export const Container = styled.section`
  position: absolute;
  left: 0;
  top: 1.5rem;
  z-index: 10;
  min-width: 80vw;
  border: 1px solid ${({ theme }) => theme.color.subText};
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
  .range-container {
    background: white;
    border: 0;
    outline: none;
    padding: 0;
    margin: 0;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    margin-top: 1rem;
  }
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
  align-items: center;
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

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
`;

export const DateFilterContainer = styled.div`
  position: absolute;
  width: calc(100% - 0.6em);
  border: 1px solid ${({ theme }) => theme.color.subText};
  padding: 0.3em;
  background: white;
  z-index: 10;
`;

export const DateFilterButton = styled(Button)`
  border: none;
  background: white;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.subText};
  }
`;

export const BottomButton = styled(Input)`
  border: none;
  background: ${({ theme }) => theme.color.brandColor};
`;

export const Model = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
