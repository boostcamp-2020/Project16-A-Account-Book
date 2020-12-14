import styled from 'styled-components';
import ChattingBox from 'components/molecules/ChattingBox';
import Input from 'components/atoms/Input';

export const ChattingArea = styled.div`
  width: 100%;
  height: calc(100% - 1rem);
  border: 0.1rem solid ${({ theme }) => theme.color.brandColor};
  input {
    padding: 0;
    margin: 0;
    height: 100%;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.color.brandColor};
  }
  input + input {
    border-left: 1px solid ${({ theme }) => theme.color.brandColor};
  }
`;

export const ChattingBottom = styled.div`
  width: 100%;
  display: flex;
  height: 2.2rem;
  align-items: center;
`;

export const ChatBox = styled(ChattingBox)`
  width: 100%;
  height: 40rem;
`;

export const ChattingInput = styled(Input)``;

export const ChattingBtn = styled(Input)`
  width: 10%;
`;
