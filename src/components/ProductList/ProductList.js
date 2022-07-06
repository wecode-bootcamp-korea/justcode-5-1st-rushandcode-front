import React from 'react';
import { Link } from 'react-router-dom';
import css from './ProductList.module.scss';

function Productslist({ data }) {
  return (
    <ul className={css.product_list}>
      {data.map(data => {
        const price = data.price;
        return (
          <li key={data.id}>
            <Link to={`/productDetail/${data.id}`}>
              <div className={css.prd_img}>
                <img src={data.productImages[0].url} alt={data.name} />
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
                <span>
                  {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Productslist;
