import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './ProductsSelectFilter.module.scss';

function ProductsSelectFilter(props) {
  const { data, mainCategory, subCategory } = props;
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

  // const [selectFilter, setSelectFilter] = useState(false);

  // const clickChangeFilter = e => {
  //   //setSelectFilter(!selectFilter);
  // };

  return (
    <div className={css.select_filter} ref={outsideRef}>
      <div
        className={`${css.drop_list} ${css.drop_list_title}`}
        onClick={clickDropList}
      >
        추천순
        <span
          className={appear ? css.drop_list_arrow_up : css.drop_list_arrow_down}
        ></span>
      </div>
      <ul
        className={css.select_filter_drop}
        style={{ display: appear ? 'block' : 'none' }}
      >
        <li className={css.drop_list}>
          <Link to="">추천순</Link>
        </li>
        <li className={css.drop_list}>
          <Link to="">인기순</Link>
        </li>
        <li className={css.drop_list}>
          <Link to="">낮은가격순</Link>
        </li>
        <li className={css.drop_list}>
          <Link to="">높은가격순</Link>
        </li>
        <li className={css.drop_list}>
          <Link to="">리뷰많은순</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductsSelectFilter;
