import styled from 'styled-components';
import ChattingBox from 'components/molecules/ChattingBox';
import Input from 'components/atoms/Input';

export const ChattingArea = styled.div`
  width: 100%;
  padding: 1%;
  border: 0.1rem solid ${({ theme }) => theme.color.brandColor};
`;

export const ChattingBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ChatBox = styled(ChattingBox)`
  width: 100%;
  height: 40rem;
`;

export const ChattingInput = styled(Input)`
  width: 90%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 1%;
  border: 0.1rem solid ${({ theme }) => theme.color.brandColor};
  margin-right: 1%;
`;

export const ChattingBtn = styled(Input)`
  width: 10%;
  padding: 0.8%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: 0.1rem solid ${({ theme }) => theme.color.brandColor};
`;
