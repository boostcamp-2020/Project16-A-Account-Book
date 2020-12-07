import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { withKnobs } from '@storybook/addon-knobs';
import CategoryDropdown from '.';

export default {
  title: 'molecules/DropdownBody',
  component: CategoryDropdown,
  decorators: [withKnobs],
};

export const categoryDropdownBody = () => {
  const categories = ['급여', '용돈', '금융수입'];
  const dropDownItemClicked = ({ target }: any) => {
    alert(`${target.value}`);
  };
  const deleteClicked = ({ target }: any) => {
    alert(`${target.value}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <CategoryDropdown
        dataList={categories}
        dropDownItemClicked={dropDownItemClicked}
        isClicked={false}
        deleteClicked={deleteClicked}
      />
    </ThemeProvider>
  );
};

export const editButtonDropdownBody = () => {
  const categories = ['급여', '용돈', '금융수입'];
  const dropDownItemClicked = ({ target }: any) => {
    alert(`${target.value}`);
  };
  const deleteClicked = ({ target }: any) => {
    alert(`${target.value}`);
  };
  return (
    <ThemeProvider theme={theme}>
      <CategoryDropdown
        dataList={categories}
        dropDownItemClicked={dropDownItemClicked}
        isClicked
        deleteClicked={deleteClicked}
      />
    </ThemeProvider>
  );
};
