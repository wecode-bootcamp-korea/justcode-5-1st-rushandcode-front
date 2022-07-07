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
          />
        </div>
        <ul
          className={css.select_filter_drop}
          style={{ display: appear ? 'block' : 'none' }}
        >
          {mainCategory && subCategory === null && (
            <>
              <Link to={`/products?mainCategory=${mainCategory}`}>
                <li
                  className={`${css.drop_list} ${sort === null && css.active}`}
                  onClick={clickDropList}
                >
                  추천순
                </li>
              </Link>
              <Link to={`${mainURL}&sort=sell`}>
                <li
                  className={`${css.drop_list} ${
                    sort === 'sell' && css.active
                  }`}
                  onClick={clickDropList}
                >
                  인기순
                </li>
              </Link>
              <Link to={`${mainURL}&sort=asc`}>
                <li
                  className={`${css.drop_list} ${sort === 'asc' && css.active}`}
                  onClick={clickDropList}
                >
                  낮은가격순
                </li>
              </Link>
              <Link to={`${mainURL}&sort=desc`}>
                <li
                  className={`${css.drop_list} ${
                    sort === 'desc' && css.active
                  }`}
                  onClick={clickDropList}
                >
                  높은가격순
                </li>
              </Link>
            </>
          )}
          {mainCategory && subCategory && (
            <>
              <Link to={`${mainSubURL}`}>
                <li
                  className={`${css.drop_list} ${sort === null && css.active}`}
                  onClick={clickDropList}
                >
                  추천순
                </li>
              </Link>
              <Link to={`${mainSubURL}&sort=sell`}>
                <li
                  className={`${css.drop_list} ${
                    sort === 'sell' && css.active
                  }`}
                  onClick={clickDropList}
                >
                  인기순
                </li>
              </Link>
              <Link to={`${mainSubURL}&sort=asc`}>
                <li
                  className={`${css.drop_list} ${sort === 'asc' && css.active}`}
                  onClick={clickDropList}
                >
                  낮은가격순
                </li>
              </Link>
              <Link to={`${mainSubURL}&sort=desc`}>
                <li
                  className={`${css.drop_list} ${
                    sort === 'desc' && css.active
                  }`}
                  onClick={clickDropList}
                >
                  높은가격순
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductsSelectFilter;
