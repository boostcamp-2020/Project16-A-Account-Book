import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs } from '@storybook/addon-knobs';
import DropdownHeader from 'components/molecules/DropdownHeader';
import DropdownBody from '.';

export default {
  title: 'molecules/DropdownBody',
  component: DropdownBody,
  decorators: [withKnobs],
};

export const categoryDropdownBody = () => {
  const categories = ['급여', '용돈', '금융수입'];
  const onClick = ({ target }: any) => {
    alert(`${target.value}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <DropdownBody dataList={categories} onClick={onClick} />
    </ThemeProvider>
  );
};

const Dropdown = styled.div`
  width: 10rem;
  border: 1px solid blue;
`;
export const CategoryDropdown = () => {
  const categories = ['급여', '용돈', '금융수입'];
  const onClick = ({ target }: any) => {
    alert(`${target.value}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <DropdownHeader title="카테고리">
          <DropdownBody dataList={categories} onClick={onClick} />
        </DropdownHeader>
      </Dropdown>
    </ThemeProvider>
  );
};
