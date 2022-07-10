import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './ProductsSelectFilter.module.scss';

function SortItem(props) {
  const { to, sort, sortKR, sortEN, onClick } = props;

  return (
    <>
      <Link to={to}>
        <li
          className={`${css.drop_list} ${sort === sortEN && css.active}`}
          onClick={onClick}
        >
          {sortKR}
        </li>
      </Link>
    </>
  );
}

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

  const prdSort = [
    { id: 1, sortKR: '인기순', sortEN: 'sell' },
    { id: 2, sortKR: '낮은가격순', sortEN: 'asc' },
    { id: 3, sortKR: '높은가격순', sortEN: 'desc' },
  ];

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
              <SortItem
                to={`${mainURL}`}
                onClick={clickDropList}
                sort={sort}
                sortKR="추천순"
                sortEN={null}
              />
              {prdSort.map(data => (
                <SortItem
                  key={data.id}
                  to={`${mainURL}&sort=${data?.sortEN}`}
                  onClick={clickDropList}
                  sort={sort}
                  sortKR={data?.sortKR}
                  sortEN={data?.sortEN}
                />
              ))}
            </>
          )}
          {mainCategory && subCategory && (
            <>
              <SortItem
                to={`${mainSubURL}`}
                onClick={clickDropList}
                sort={sort}
                sortKR="추천순"
                sortEN={null}
              />
              {prdSort.map(data => (
                <SortItem
                  key={data.id}
                  to={`${mainSubURL}&sort=${data?.sortEN}`}
                  onClick={clickDropList}
                  sort={sort}
                  sortKR={data?.sortKR}
                  sortEN={data?.sortEN}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProductsSelectFilter;
