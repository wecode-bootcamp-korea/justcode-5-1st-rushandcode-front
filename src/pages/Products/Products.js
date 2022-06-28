import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Productslist from '../../components/ProductList/ProductList';
import ProductCategory from '../../components/ProductsCategory/ProductsCategory';
import ProductsSelectFilter from '../../components/ProductsSelectFilter/ProductsSelectFilter';
import ProductsTopBanner from '../../components/ProductsTopBanner/ProductsTopBanner';
import css from './Products.module.scss';

function Products() {
  function useQuery() {
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  let mainCategory = query.get('mainCategory');
  let subCategory = query.get('subCategory');
  let sort = query.get('sort');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (mainCategory && subCategory === null) {
      fetch(`http://localhost:10010/products?mainCategory=${mainCategory}`)
        .then(res => res.json())
        .then(res => {
          setProducts(res.products);
        });
      if (sort === 'desc') {
        //높은가격순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&sort=desc`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
      if (sort === 'asc') {
        //낮은가격순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&sort=asc`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
      if (sort === 'sell') {
        //판매인기순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&sort=sell`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
    }
    if (mainCategory && subCategory) {
      fetch(
        `http://localhost:10010/products?mainCategory=${mainCategory}&subCategory=${subCategory}`
      )
        .then(res => res.json())
        .then(res => {
          setProducts(res.products);
        });
      if (sort === 'desc') {
        //높은가격순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=desc`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
      if (sort === 'asc') {
        //낮은가격순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=asc`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
      if (sort === 'sell') {
        //판매인기순
        fetch(
          `http://localhost:10010/products?mainCategory=${mainCategory}&subCategory=${subCategory}&sort=sell`
        )
          .then(res => res.json())
          .then(res => {
            setProducts(res.products);
          });
      }
    }
  }, [mainCategory, subCategory, sort]);

  return (
    <div>
      <div className={css.container}>
        <ProductsTopBanner
          data={products}
          mainCategory={mainCategory}
          subCategory={subCategory}
        />
        <div className={css.products}>
          <div className={css.contents}>
            <ProductsSelectFilter
              data={products}
              mainCategory={mainCategory}
              subCategory={subCategory}
              sort={sort}
            />
            <ProductCategory
              data={products}
              mainCategory={mainCategory}
              subCategory={subCategory}
            />
            <article className={css.product_container}>
              <div className={css.product_box}>
                <Productslist
                  data={products}
                  mainCategory={mainCategory}
                  subCategory={subCategory}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
