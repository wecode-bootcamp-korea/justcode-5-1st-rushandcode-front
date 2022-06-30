import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Productslist from '../../components/ProductList/ProductList';
import ProductCategory from '../../components/ProductsCategory/ProductsCategory';
import ProductsSelectFilter from '../../components/ProductsSelectFilter/ProductsSelectFilter';
import ProductsTopBanner from '../../components/ProductsTopBanner/ProductsTopBanner';
import css from './Products.module.scss';

function Products() {
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
    const mainURL = `?mainCategory=${mainCategory}`;
    const mainSubURL = `?mainCategory=${mainCategory}&subCategory=${subCategory}`;
    function productsURL(url) {
      fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(res => {
          setProducts(res.products);
        });
    }
    if (mainCategory && subCategory === null) {
      productsURL(`${baseURL}${mainURL}`);
      if (sort === 'desc') {
        //높은가격순
        productsURL(`${baseURL}${mainURL}}&sort=desc`);
      }
      if (sort === 'asc') {
        //낮은가격순
        productsURL(`${baseURL}${mainURL}&sort=asc`);
      }
      if (sort === 'sell') {
        //판매인기순
        productsURL(`${baseURL}${mainURL}&sort=sell`);
      }
    }
    if (mainCategory && subCategory) {
      productsURL(`${baseURL}${mainSubURL}`);
      if (sort === 'desc') {
        //높은가격순
        productsURL(`${baseURL}${mainSubURL}&sort=desc`);
      }
      if (sort === 'asc') {
        //낮은가격순
        productsURL(`${baseURL}${mainSubURL}&sort=asc`);
      }
      if (sort === 'sell') {
        //판매인기순
        productsURL(`${baseURL}${mainSubURL}&sort=sell`);
      }
    }
  }, [mainCategory, subCategory, sort]);

  return (
    <div>
      <div className={css.container}>
        <ProductsTopBanner
          mainCategory={mainCategory}
          subCategory={subCategory}
        />
        <div className={css.products}>
          <div className={css.contents}>
            <ProductsSelectFilter
              mainCategory={mainCategory}
              subCategory={subCategory}
              sort={sort}
            />
            <ProductCategory
              mainCategory={mainCategory}
              subCategory={subCategory}
            />
            <article className={css.product_container}>
              <div className={css.product_box}>
                <Productslist data={products} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
