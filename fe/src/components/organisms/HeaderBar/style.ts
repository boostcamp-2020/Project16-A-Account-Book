import styled from 'styled-components';
import IconButton from 'components/molecules/IconButton';

export interface Props {}

export const HeaderBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.brandColor};
  display: flex;
  justify-content: center;
  align-items: center;
  > .content {
    width: 80vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-back {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.white};
  }
  .header_title {
    font-size: 1.2rem;
  }
`;

export const Icon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: -2px;
  background: transparent;
`;
