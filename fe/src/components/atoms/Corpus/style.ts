import styled from 'styled-components';
import theme from 'styles/theme';

export interface CorpusProps {
  type: string;
}

const myMessage = 'mine';

const fontsize = theme.fontSize.sm;
// color수정
const TextBox = styled.div`
  background-color: ${({ type }: CorpusProps) =>
    type === myMessage ? theme.color.brandColor : theme.color.white};
  border: 0.08rem solid ${theme.color.brandColor};
  color: ${({ type }: CorpusProps) =>
    type === myMessage ? theme.color.white : theme.color.black};
  padding: 1%;
  width: fit-content;
  max-width: 90%;
  font-size: ${fontsize};
  border-radius: 0.025rem;
`;

export default TextBox;
