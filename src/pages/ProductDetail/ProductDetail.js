import React from 'react';
import Image from '../../elements/Image';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductDetailInfo from '../../components/ProductDetailInfo/ProductDetailInfo';
import css from './ProductDetail.module.scss';
import ProductShipping from '../../components/ProductShipping/ProductShipping';
import ProductReview from '../../components/ProductReview/ProductReview';

function ProductDetail() {
  return (
    <>
      <div className={css.container}>
        <div className={css.images_container}>
          <Image
            size={380}
            src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keSUyMHdhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className={css.images}>
            <Image
              size={65}
              src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9keSUyMHdhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <Image
              size={65}
              src="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvZHklMjB3YXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <Image
              size={65}
              src="https://images.unsplash.com/photo-1616622236995-cb00e537365e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJvZHklMjB3YXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
        <ProductInfo />
      </div>
      <ProductDetailInfo />
      <ProductReview />
      <ProductShipping />
    </>
  );
}

export default ProductDetail;
