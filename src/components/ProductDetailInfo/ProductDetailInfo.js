import React from 'react';
import css from './ProductDetailInfo.module.scss';
import Image from '../../elements/Image';
import ProductTab from '../ProductTab/ProductTab';

function ProductDetailInfo(props) {
  const { imageList, content } = props;
  return (
    <div>
      <ProductTab />
      <section className={css.desc}>
        <div className={css.category}>배쓰 밤</div>
        <div className={css.name}>더티</div>
        <div className={css.first_image}>
          <Image width={986} height={400} src={imageList && imageList[3].url} />
        </div>
        <div className={css.desc_text}>{content}</div>
        <div className={css.second_image}>
          <Image width={986} height={400} src={imageList && imageList[4].url} />
        </div>
        <div className={css.third_image}>
          <Image size={500} src={imageList && imageList[5].url} />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailInfo;
