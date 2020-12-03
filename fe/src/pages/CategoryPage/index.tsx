import React, { useEffect, useState } from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/Header';
import backArrow from 'assets/svg/backArrow.svg';
import IconButton from 'components/molecules/IconButton';
import CategoryArea from 'components/organisms/CategoryArea';
import { observer } from 'mobx-react-lite';
import { CategoryStore, categoryType } from 'stores/Category';

function CategoryPage(): React.ReactElement {
  const [type, setType] = useState(categoryType.EXPENSE);

  useEffect(() => {
    CategoryStore.loadCategories();
  }, []);

  return (
    <CategoryTemplate
      headerContent={<Header />}
      homeButton={<IconButton icon={backArrow} />}
      title="카테고리 설정"
      bodyContent={<CategoryArea dataList={CategoryStore.categoryList[type]} />}
    />
  );
}

export default observer(CategoryPage);
