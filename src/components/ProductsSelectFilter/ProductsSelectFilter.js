import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './ProductsSelectFilter.module.scss';

function ProductsSelectFilter(props) {
  const { mainCategory, subCategory, sort } = props;
  const [appear, setAppear] = useState(false);

  const clickDropList = e => {
    setAppear(!appear);
  };

  const outsideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setAppear(appear);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [outsideRef]);

  const mainURL = `/products?mainCategory=${mainCategory}`;
  const mainSubURL = `/products?mainCategory=${mainCategory}&subCategory=${subCategory}`;

  return (
    <div className={css.list_header}>
      {mainCategory && subCategory === null && <h2>{mainCategory}</h2>}
      {mainCategory && subCategory && <h2>{subCategory}</h2>}
      <div className={css.select_filter} ref={outsideRef}>
        <div
          className={`${css.drop_list} ${css.drop_list_title}`}
          onClick={clickDropList}
        >
          {sort === null && '추천순'}
          {sort === 'sell' && '인기순'}
          {sort === 'asc' && '낮은가격순'}
          {sort === 'desc' && '높은가격순'}
          <span
            className={
              appear ? css.drop_list_arrow_up : css.drop_list_arrow_down
            }
          ></span>
        </div>
        <ul
          className={css.select_filter_drop}
          style={{ display: appear ? 'block' : 'none' }}
        >
          {mainCategory && subCategory === null && (
            <>
              <li
                className={
                  sort === null
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`/products?mainCategory=${mainCategory}`}>
                  추천순
                </Link>
              </li>
              <li
                className={
                  sort === 'sell'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainURL}&sort=sell`}>인기순</Link>
              </li>
              <li
                className={
                  sort === 'asc'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainURL}&sort=asc`}>낮은가격순</Link>
              </li>
              <li
                className={
                  sort === 'desc'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainURL}&sort=desc`}>높은가격순</Link>
              </li>
            </>
          )}
          {mainCategory && subCategory && (
            <>
              <li
                className={
                  sort === null
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainSubURL}`}>추천순</Link>
              </li>
              <li
                className={
                  sort === 'sell'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainSubURL}&sort=sell`}>인기순</Link>
              </li>
              <li
                className={
                  sort === 'asc'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainSubURL}&sort=asc`}>낮은가격순</Link>
              </li>
              <li
                className={
                  sort === 'desc'
                    ? `${css.drop_list} ${css.active}`
                    : css.drop_list
                }
                onClick={clickDropList}
              >
                <Link to={`${mainSubURL}&sort=desc`}>높은가격순</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductsSelectFilter;
