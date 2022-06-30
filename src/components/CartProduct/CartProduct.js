import React, { useState, useEffect } from 'react';
import css from './CartProduct.module.scss';
import Image from '../../elements/Image';

function CartProduct(props) {
  const { firstProduct, cart } = props;
  const [productInfo, setProductInfo] = useState([]);
  const id = cart.id;

  useEffect(() => {
    fetch(`http://localhost:10010/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data?.products[0]);
      });
  }, [id]);

  const name = productInfo?.name;
  const subCategory = productInfo?.sub_category;
  const count = cart.count;
  const price = productInfo.price;

  const imageList = productInfo?.productImages;
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(imageList && imageList[0].url);
  }, [imageList]);

  return (
    <tr className={css.container}>
      <td className={css.info}>
        {image && <Image className={css.img} size={70} src={image} />}
        <div className={css.product_name}>
          <div>{name}</div>
          <div className={css.sub_category}>{subCategory}</div>
        </div>
      </td>
      <td className={css.count}>{count}</td>
      <td className={css.price}>₩ {price}</td>
      <td className={css.total_price}>₩ {count * price}</td>
      {firstProduct && (
        <td className={css.ship}>
          <div>₩ 2,500</div>
          <div>(택배)</div>
        </td>
      )}
    </tr>
  );
}

export default CartProduct;
