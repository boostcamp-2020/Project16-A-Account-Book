import styled from 'styled-components';
import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';

export const EditButton = styled(Button)`
  width: 5%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.selectedBlue};
`;

export const StyledButton = styled(IconButton)`
  margin-top: 5%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.brandColor};
  box-shadow: 0.05rem 0.1rem ${({ theme }) => theme.color.grayBackground};
`;

export const TabUIContainer = styled.div`
  width: 100%;
`;

export const DropDownContainer = styled.div`
  width: 100%;
`;

export const EditButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1% 0;
  background-color: ${({ theme }) => theme.color.grayBackground};
`;

export const TabBottomArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CategoryAreaContainer = styled.div``;
