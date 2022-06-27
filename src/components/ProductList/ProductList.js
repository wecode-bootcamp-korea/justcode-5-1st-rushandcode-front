import React from 'react';
import { Link } from 'react-router-dom';
import css from './ProductList.module.scss';

function Productslist(props) {
  const { data, mainCategory, subCategory } = props;
  console.log(data);
  return (
    <ul className={css.product_list}>
      {data.map(data => (
        <li key={data.id}>
          <div className={css.prd_img}>
            <Link to="">
              <img src={data.productImages[0].url} alt="상품명" />
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
                <span>{data.hashtags}</span>
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
