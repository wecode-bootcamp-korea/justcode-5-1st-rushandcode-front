import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Productslist from '../../components/ProductList/ProductList';
import ProductCategory from '../../components/ProductsCategory/ProductsCategory';
import ProductsSelectFilter from '../../components/ProductsSelectFilter/ProductsSelectFilter';
import css from './Products.module.scss';

function Products() {
  function useQuery() {
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  let mainCategory = query.get('mainCategory');
  let subCategory = query.get('subCategory');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (mainCategory && subCategory === null) {
      fetch(`http://localhost:10010/products?mainCategory=${mainCategory}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setProducts(res.products);
        });
    }
    if (mainCategory && subCategory) {
      fetch(
        `http://localhost:10010/products?mainCategory=${mainCategory}&subCategory=${subCategory}`
      )
        .then(res => res.json())
        .then(res => {
          setProducts(res.products);
        });
    }
  }, [mainCategory, subCategory]);

  return (
    <div>
      <div className={css.container}>
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
              <ProductsSelectFilter
                data={products}
                mainCategory={mainCategory}
                subCategory={subCategory}
              />
            </div>
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
