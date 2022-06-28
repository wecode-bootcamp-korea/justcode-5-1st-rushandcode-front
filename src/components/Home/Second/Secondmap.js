import React from 'react';
import css from './Secondmap.module.scss';

function Secondmap({ name, hashtags, price, url }) {
  return (
    <div className={css.inner}>
      <img className={css.img} src={url} alt="사진" />
      <ul>
        <li className={css.products_info}>{name}</li>
        <li className={css.products_info}>{hashtags}</li>
        <li className={css.products_info}>{price}</li>
      </ul>
    </div>
  );
}
export default Secondmap;
