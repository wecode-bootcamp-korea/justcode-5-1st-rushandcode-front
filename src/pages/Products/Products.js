import React from 'react';
import { Link } from 'react-router-dom';
import css from './Products.module.scss';
import SelectFilter from './SelectFilter';
import Productslist from './ProductList.js';

function Products() {
  const selectFilterOption = [
    {
      id: 1,
      value: 'recommend',
      name: '추천순',
    },
    {
      id: 2,
      value: 'popular',
      name: '인기순',
    },
    {
      id: 3,
      value: 'lowPrice',
      name: '낮은가격순',
    },
    {
      id: 4,
      value: 'highPrice',
      name: '높은가격순',
    },
    {
      id: 5,
      value: 'manyReviews',
      name: '리뷰많은순',
    },
  ];

  const prdData = [
    {
      id: 1,
      name: '배쓰1',
      price: 19000,
    },
    {
      id: 2,
      name: '배쓰2',
      price: 18000,
    },
    {
      id: 3,
      name: '배쓰3',
      price: 29000,
    },
    {
      id: 4,
      name: '배쓰4',
      price: 19500,
    },
    {
      id: 5,
      name: '배쓰5',
      price: 22000,
    },
    {
      id: 6,
      name: '배쓰6',
      price: 34000,
    },
    {
      id: 7,
      name: '배쓰7',
      price: 95000,
    },
    {
      id: 8,
      name: '배쓰8',
      price: 78000,
    },
    {
      id: 9,
      name: '배쓰9',
      price: 55000,
    },
    {
      id: 10,
      name: '배쓰10',
      price: 12300,
    },
    {
      id: 11,
      name: '배쓰11',
      price: 14400,
    },
    {
      id: 12,
      name: '배쓰12',
      price: 25600,
    },
  ];

  return (
    <div>
      <div className={css.container}>
        <nav>임시nav</nav>
        <div className={css.product_top_banner}>
          <div className={css.product_top_banner_bg}>
            <div className="banner_text">
              <p className={css.banner_title}>배쓰</p>
              <p className={css.banner_sub}>
                당신에게 향기로운 입욕을 선물합니다
              </p>
            </div>
          </div>
        </div>
        <div className={css.products}>
          <div className={css.contents}>
            <div className={css.list_header}>
              <h2>배쓰</h2>
              <SelectFilter option={selectFilterOption} />
            </div>
            <ul className={css.list_category}>
              <li>
                <Link to="">
                  <span className={css.on}>전체</span>
                </Link>
                <span className={css.on}>(75)</span>
              </li>
              <li>
                <Link to="">
                  <span>배쓰 밤</span>
                </Link>
                <span>(34)</span>
              </li>
              <li>
                <Link to="">
                  <span>버블 바</span>
                </Link>
                <span>(34)</span>
              </li>
              <li>
                <Link to="">
                  <span>배쓰 오일</span>
                </Link>
                <span>(34)</span>
              </li>
            </ul>
            <article className={css.product_container}>
              <div className={css.product_box}>
                <Productslist data={prdData} />
              </div>
            </article>
          </div>
        </div>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default Products;
