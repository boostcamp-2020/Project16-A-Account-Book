import styled from 'styled-components';
import ChattingBox from 'components/molecules/ChattingBox';
import Input from 'components/atoms/Input';

export const ChattingInput = styled(Input)`
  text-indent: 1rem;
`;

export const ChattingBtn = styled(Input)`
  width: 20%;
`;
export const ChattingArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 1rem;
  left: calc(5%);
  right: calc(5%);
  height: calc(100% - 2rem);
  overflow-x: hidden;
  border: 0.1rem solid ${({ theme }) => theme.color.brandColor};
  input {
    padding: 0;
    margin: 0;
    height: 100%;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.color.brandColor};
  }

  ${ChattingInput} +${ChattingBtn} {
    border-left: 1px solid ${({ theme }) => theme.color.brandColor};
  }
`;

export const ChattingBottom = styled.div`
  width: 100%;
  display: flex;
  height: 2.2rem;
  overflow-y: auto;
  align-items: center;
`;

export const ChatBox = styled(ChattingBox)`
  width: 100%;
  height: 40rem;
`;
