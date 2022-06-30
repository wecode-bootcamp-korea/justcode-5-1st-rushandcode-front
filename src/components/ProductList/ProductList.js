import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './ProductList.module.scss';

function Productslist() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  let mainCategory = query.get('mainCategory');
  let subCategory = query.get('subCategory');
  let sort = query.get('sort');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const baseURL = 'http://localhost:10010/products';
    function productsURL(url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setProducts(res.products);
        });
    }
    if (mainCategory && subCategory === null) {
      productsURL(`${baseURL}?mainCategory=${mainCategory}`);
      if (sort === 'desc') {
        //높은가격순
        productsURL(`${baseURL}?mainCategory=${mainCategory}&sort=desc`);
      }
      if (sort === 'asc') {
        //낮은가격순
        productsURL(`${baseURL}?mainCategory=${mainCategory}&sort=asc`);
      }
      if (sort === 'sell') {
        //판매인기순
        productsURL(`${baseURL}?mainCategory=${mainCategory}&sort=sell`);
      }
    }
    if (mainCategory && subCategory) {
      productsURL(
        `${baseURL}?mainCategory=${mainCategory}&subCategory=${subCategory}`
      );
      if (sort === 'desc') {
        //높은가격순
        productsURL(
          `${baseURL}?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=desc`
        );
      }
      if (sort === 'asc') {
        //낮은가격순
        productsURL(
          `${baseURL}?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=asc`
        );
      }
      if (sort === 'sell') {
        //판매인기순
        productsURL(
          `${baseURL}?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=sell`
        );
      }
    }
  }, [mainCategory, subCategory, sort]);

  return (
    <ul className={css.product_list}>
      {products.map(data => (
        <li key={data.id}>
          <Link to={`/productDetail/${data.id}`}>
            <div className={css.prd_img}>
              <img src={data.productImages[0].url} alt="상품명" />
            </div>
            <div className={css.prd_label}>
              <span className={css.prd_label_new}>NEW</span>

              <span className={css.prd_label_vegan}>VEGAN</span>
            </div>
            <div className={css.prd_name}>
              <div>{data.name}</div>
              <div className={css.prd_hashtag}>
                <span>{data.hashtags}</span>
              </div>
            </div>
            <div className={css.prd_price}>
              <span>₩</span>
              <span>{data.price}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Productslist;
