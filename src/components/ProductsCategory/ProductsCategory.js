import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './ProductsCategory.module.scss';

function ProductCategory(props) {
  const { data, mainCategory, subCategory } = props;

  return (
    <>
      {mainCategory === '배쓰' && (
        <ul className={css.list_category}>
          <li>
            <Link to="/products?mainCategory=배쓰">
              <span
                className={
                  mainCategory === '배쓰' && subCategory === null && css.on
                }
              >
                전체(36)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=배쓰&subCategory=배쓰 밤">
              <span
                className={
                  mainCategory === '배쓰' && subCategory === '배쓰 밤' && css.on
                }
              >
                배쓰 밤(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=배쓰&subCategory=버블 바">
              <span
                className={
                  mainCategory === '배쓰' && subCategory === '버블 바' && css.on
                }
              >
                버블 바(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=배쓰&subCategory=배쓰 오일">
              <span
                className={
                  mainCategory === '배쓰' &&
                  subCategory === '배쓰 오일' &&
                  css.on
                }
              >
                배쓰 오일(12)
              </span>
            </Link>
          </li>
        </ul>
      )}
      {mainCategory === '샤워' && (
        <ul className={css.list_category}>
          <li>
            <Link to="/products?mainCategory=샤워">
              <span
                className={
                  mainCategory === '샤워' && subCategory === null && css.on
                }
              >
                전체(36)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=샤워&subCategory=솝">
              <span
                className={
                  mainCategory === '샤워' && subCategory === '솝' && css.on
                }
              >
                솝(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=샤워&subCategory=샤워 젤">
              <span
                className={
                  mainCategory === '샤워' && subCategory === '샤워 젤' && css.on
                }
              >
                샤워 젤(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=샤워&subCategory=보디 컨디셔너">
              <span
                className={
                  mainCategory === '샤워' &&
                  subCategory === '보디 컨디셔너' &&
                  css.on
                }
              >
                보디 컨디셔너(12)
              </span>
            </Link>
          </li>
        </ul>
      )}
      {mainCategory === '보디' && (
        <ul className={css.list_category}>
          <li>
            <Link to="/products?mainCategory=보디">
              <span
                className={
                  mainCategory === '보디' && subCategory === null && css.on
                }
              >
                전체(36)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=보디&subCategory=클렌저">
              <span
                className={
                  mainCategory === '보디' && subCategory === '클렌저' && css.on
                }
              >
                클렌저(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=보디&subCategory=로션">
              <span
                className={
                  mainCategory === '보디' && subCategory === '로션' && css.on
                }
              >
                로션(12)
              </span>
            </Link>
          </li>
          <li>
            <Link to="/products?mainCategory=보디&subCategory=핸드 앤 풋">
              <span
                className={
                  mainCategory === '보디' &&
                  subCategory === '핸드 앤 풋' &&
                  css.on
                }
              >
                핸드 앤 풋(12)
              </span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProductCategory;
