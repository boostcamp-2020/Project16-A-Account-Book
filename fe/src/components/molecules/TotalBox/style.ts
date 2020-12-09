import styled from 'styled-components';

const TotalBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  .total-box__title {
    margin-right: 0.4rem;
    color: ${({ theme }) => theme.color.black};
  }
  & + & {
    margin-top: 0.5rem;
  }
`;
export default TotalBoxContainer;
