import styled from 'styled-components';
import ChattingBox from 'components/molecules/ChattingBox';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

export const ChattingArea = styled.div`
  width: 100%;
  margin: 0;
  padding: 1%;
  border: 1px solid #2cbe4e;
`;

export const ChattingBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ChatBox = styled(ChattingBox)`
  height: 30rem;
`;

export const ChattingInput = styled(Input)`
  width: 70%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 1%;
  border: 0;
`;

export const ChattingBtn = styled(Button)`
  width: 20%;
  padding: 4%;
`;
