import styled from 'styled-components';
import theme from 'styles/theme';
import ChattingBox from '../../molecules/ChattingBox';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const fontsize = theme.fontSize.sm;

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
  height: 500px;
`;

export const ChattingInput = styled(Input)`
  width: 70%;
  font-size: ${fontsize};
  padding: 1px;
  border: 0;
`;

export const ChattingBtn = styled(Button)`
  width: 20%;
  padding: 4%;
`;
