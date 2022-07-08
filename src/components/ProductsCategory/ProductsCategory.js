import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './ProductsCategory.module.scss';

function CategoryItem(props) {
  const { to, subCategory } = props;

  let query = new URLSearchParams(useLocation().search);
  let sub = query.get('subCategory');

  return (
    <>
      {subCategory === null && (
        <li>
          <Link to={to}>
            <span className={sub === null ? css.on : undefined}>전체(36)</span>
          </Link>
        </li>
      )}
      {subCategory && (
        <li>
          <Link to={to}>
            <span className={subCategory === sub ? css.on : undefined}>
              {subCategory}(12)
            </span>
          </Link>
        </li>
      )}
    </>
  );
}

function ProductCategory(props) {
  const { mainCategory } = props;
  const mainURL = `/products?mainCategory=${mainCategory}`;
  const prdCategory = [
    {
      maincategory: '배쓰',
      subcategory: ['배쓰 밤', '버블 바', '배쓰 오일'],
    },
    {
      maincategory: '샤워',
      subcategory: ['솝', '샤워 젤', '보디 컨디셔너'],
    },
    {
      maincategory: '보디',
      subcategory: ['클렌저', '로션', '핸드 앤 풋'],
    },
  ];
  return (
    <>
      {mainCategory === '배쓰' && (
        <ul className={css.list_category}>
          <CategoryItem to={mainURL} subCategory={null} />
          {prdCategory[0].subcategory.map(data => (
            <CategoryItem
              key={data}
              to={`${mainURL}&subCategory=${data}`}
              subCategory={data}
            />
          ))}
        </ul>
      )}
      {mainCategory === '샤워' && (
        <ul className={css.list_category}>
          <CategoryItem to={`${mainURL}`} subCategory={null} />
          {prdCategory[1].subcategory.map(data => (
            <CategoryItem
              key={data}
              to={`${mainURL}&subCategory=${data}`}
              subCategory={data}
            />
          ))}
        </ul>
      )}
      {mainCategory === '보디' && (
        <ul className={css.list_category}>
          <CategoryItem to={`${mainURL}`} subCategory={null} />
          {prdCategory[2].subcategory.map(data => (
            <CategoryItem
              key={data}
              to={`${mainURL}&subCategory=${data}`}
              subCategory={data}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductCategory;
