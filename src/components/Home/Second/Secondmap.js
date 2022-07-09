import React from 'react';
import css from './Secondmap.module.scss';
import { useNavigate } from 'react-router-dom';

function Secondmap({ productData }) {
  const { id, name, hashtags, price, productImages } = productData;
  const navigate = useNavigate();
  const gotoproduct = () => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <div className={css.inner}>
      <img
        className={css.img}
        src={productImages[0].url}
        alt="사진"
        onClick={gotoproduct}
      />
      <ul>
        <li className={css.products_info}>{name}</li>
        <li className={css.products_info}>{hashtags}</li>
        <li className={css.products_info}>{price}</li>
      </ul>
    </div>
  );
}
export default Secondmap;
