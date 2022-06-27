import React from 'react';
import css from './ProductDetailInfo.module.scss';
import Image from '../../elements/Image';
import ProductTab from '../ProductTab/ProductTab';

function ProductDetailInfo(props) {
  const { productInfo } = props;
  const { productImages, content, name } = productInfo;
  const subCategory = productInfo.sub_category;

  return (
    <div>
      <ProductTab />
      <section className={css.desc}>
        <div className={css.category}>{subCategory}</div>
        <div className={css.name}>{name}</div>
        <div className={css.first_image}>
          <Image
            width={986}
            height={400}
            src={productImages && productImages[3].url}
          />
        </div>
        <div className={css.desc_text}>{content}</div>
        <div className={css.second_image}>
          <Image
            width={986}
            height={400}
            src={productImages && productImages[4].url}
          />
        </div>
        <div className={css.third_image}>
          <Image size={500} src={productImages && productImages[5].url} />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailInfo;
