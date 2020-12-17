import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.color.brandColor};
  width: 100%;
  height: 5000px;
`;

export const HeaderContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 20rem;
`;
