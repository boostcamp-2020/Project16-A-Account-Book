import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import TotalBox from '.';

const DarkContainer = styled.div`
  background-color: #000;
`;
export default {
  title: 'molecules/TotalBox',
  component: TotalBox,
};

export const totalBox = () => {
  const title = '수입';
  const total = 987654321;
  return (
    <ThemeProvider theme={theme}>
      <DarkContainer>
        <TotalBox title={title} total={total} />
      </DarkContainer>
    </ThemeProvider>
  );
};
