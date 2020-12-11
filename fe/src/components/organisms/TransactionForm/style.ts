import styled from 'styled-components';
import Input from 'components/atoms/Input';
import IconBtn from 'components/molecules/IconButton';

export const SubmitButton = styled(Input)`
  flex: 9 1 70%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.brandColor};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-size: large;
`;

export const Form = styled.form`
  div + div {
    margin-top: 1rem;
  }
`;

export const IconButton = styled(IconBtn)`
  flex: 1 1 30%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.brandColor};
  border-radius: 0.5rem;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
`;
