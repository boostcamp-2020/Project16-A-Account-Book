import React, { useEffect } from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/Header';
import backArrow from 'assets/svg/backArrow.svg';
import IconButton from 'components/molecules/IconButton';
import CategoryArea from 'components/organisms/CategoryArea';
import { observer } from 'mobx-react-lite';
import { CategoryStore } from 'stores/Category';

function CategoryPage(): React.ReactElement {
  useEffect(() => {
    CategoryStore.loadCategories();
  }, []);

  return (
    <CategoryTemplate
      headerContent={<Header />}
      homeButton={<IconButton icon={backArrow} />}
      title="카테고리 설정"
      bodyContent={<CategoryArea dataList={CategoryStore.categoryList} />}
    />
  );
}

export default observer(CategoryPage);
