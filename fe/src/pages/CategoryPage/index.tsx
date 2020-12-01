import React from 'react';
import CategoryTemplate from 'components/templates/CategoryTemplate';
import Header from 'components/organisms/Header';
import backArrow from 'assets/svg/backArrow.svg';
import IconButton from 'components/molecules/IconButton';
import CategoryArea from 'components/organisms/CategoryArea';

function CategoryPage(): React.ReactElement {
  return (
    <CategoryTemplate
      headerContent={<Header />}
      homeButton={<IconButton icon={backArrow} />}
      title="카테고리 설정"
      bodyContent={<CategoryArea />}
    />
  );
}

export default CategoryPage;
