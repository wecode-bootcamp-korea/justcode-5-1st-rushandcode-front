import React from 'react';
import css from './Searchdetail.module.scss';
import { useNavigate } from 'react-router-dom';

const Searchdetail = ({ data }) => {
  const navigate = useNavigate();

  const gotoproduct = () => {
    navigate(`/productdetail/${data.id}`);
  };

  return (
    <div className={css.product}>
      <img
        className={css.img}
        src={data.productImages[0].url}
        onClick={gotoproduct}
      />
      <p className={css.info}>{data.name}</p>
      <p className={css.info}> {data.hashtags}</p>
      <p className={css.info}>{data.price}</p>
    </div>
  );
};

export default Searchdetail;
