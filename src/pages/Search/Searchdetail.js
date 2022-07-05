import React from 'react';
import css from './Searchdetail.module.scss';

const Searchdetail = ({ data }) => {
  return (
    <div className={css.product}>
      <img className={css.img} src={data.productImages[0].url} />
      <div className={css.wrapinfo}>
        <p>{data.name}</p>
        <p> {data.hashtags}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default Searchdetail;
