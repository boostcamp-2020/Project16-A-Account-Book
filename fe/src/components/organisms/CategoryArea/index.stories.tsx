import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import CategoryArea from '.';

export default {
  title: 'Organisms / CategoryArea',
};

const dataList = ['random', 'values'];

const dropDownItemClicked = () => {
  console.log('dropdown item clicked');
};

const onPlusButtonClick = () => {
  console.log('plus button clicked');
};

export const defaultTabHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryArea
        dataList={dataList}
        onClickHandler={() => {}}
        onPlusButtonClick={onPlusButtonClick}
        dropDownItemClicked={dropDownItemClicked}
        isClicked={false}
        editButtonHandler={() => {
          console.log('hi');
        }}
        deleteClicked={() => {
          console.log('deleted');
        }}
      />
    </ThemeProvider>
  );
};
