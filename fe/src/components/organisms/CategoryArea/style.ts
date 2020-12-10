import styled from 'styled-components';
import IconButton from 'components/molecules/IconButton';

export const CustomEditButton = styled.input`
  font-size: ${({ theme }) => theme.fontSize.xs};
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.selectedBlue};
  margin-right: 0.8rem;
  padding: 0%;
`;

export const StyledButton = styled(IconButton)`
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
  height: calc(100% - 6.7rem);
  width: 100%;
  overflow-y: auto;
`;

export const EditButtonArea = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.grayBackground};
`;

export const TabBottomArea = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 0.5rem;
`;

export const CategoryAreaContainer = styled.div`
  height: inherit;
`;
