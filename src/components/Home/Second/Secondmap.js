import React from 'react';
import css from './Secondmap.module.scss';
import { useNavigate } from 'react-router-dom';

function Secondmap({ productData }) {
  const navigate = useNavigate();
  const gotoproduct = () => {
    navigate(`/productdetail/${productData.id}`);
  };

  return (
    <div className={css.inner}>
      <img
        className={css.img}
        src={productData.productImages[0].url}
        alt="사진"
        onClick={gotoproduct}
      />
      <ul>
        <li className={css.products_info}>{productData.name}</li>
        <li className={css.products_info}>{productData.hashtags}</li>
        <li className={css.products_info}>{productData.price}</li>
      </ul>
    </div>
  );
}
export default Secondmap;
