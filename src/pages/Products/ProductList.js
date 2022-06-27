import React from 'react';
import { Link } from 'react-router-dom';
import css from './ProductList.module.scss';

function Productslist(props) {
  return (
    <ul className={css.product_list}>
      {props.data.map(data => (
        <li key={data.id}>
          <div className={css.prd_img}>
            <Link to="">
              <img
                src="https://www.lush.co.kr/data/goods/22/04/14/1000002148/1000002148_main_085.jpg"
                alt="상품명"
              />
            </Link>
          </div>
          <div className={css.prd_label}>
            <Link to="">
              <span className={css.prd_label_new}>NEW</span>
            </Link>
            <Link to="">
              <span className={css.prd_label_vegan}>VEGAN</span>
            </Link>
          </div>
          <div className={css.prd_name}>
            <Link to="">
              <div>{data.name}</div>
              <div className={css.prd_hashtag}>
                <span>#배쓰밤</span>
                <span>#EID</span>
              </div>
            </Link>
          </div>
          <div className={css.prd_price}>
            <span>₩</span>
            <span>{data.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Productslist;
