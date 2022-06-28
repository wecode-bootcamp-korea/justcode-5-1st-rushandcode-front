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
          <Link to={`/productDetail/${data.id}`}>
            <div className={css.prd_img}>
              <img src={data.productImages[0].url} alt="상품명" />
            </div>
            <div className={css.prd_label}>
              <span className={css.prd_label_new}>NEW</span>

              <span className={css.prd_label_vegan}>VEGAN</span>
            </div>
            <div className={css.prd_name}>
              <div>{data.name}</div>
              <div className={css.prd_hashtag}>
                <span>{data.hashtags}</span>
              </div>
            </div>
            <div className={css.prd_price}>
              <span>₩</span>
              <span>{data.price}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Productslist;
