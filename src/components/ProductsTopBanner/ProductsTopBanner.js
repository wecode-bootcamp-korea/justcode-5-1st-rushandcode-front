import React from 'react';
import css from './ProductsTopBanner.module.scss';

function ProductsTopBanner(props) {
  const { mainCategory, subCategory } = props;

  const bathImage = {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1588097237448-45f7aadebae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'})`,
    backgroundRepeat: 'no-repeat',
  };
  const showerImage = {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1559304787-945aa4341065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
  };
  const bodyImage = {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1551651056-2cb4d5c104be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'})`,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={css.product_top_banner}>
      <div
        className={css.product_top_banner_bg}
        style={
          (mainCategory === '배쓰' && bathImage) ||
          (mainCategory === '샤워' && showerImage) ||
          (mainCategory === '보디' && bodyImage)
        }
      >
        <div className="banner_text">
          <p className={css.banner_title}>
            {mainCategory && subCategory === null && (
              <span>{mainCategory}</span>
            )}
            {mainCategory && subCategory && <span>{subCategory}</span>}
          </p>
          <p className={css.banner_sub}>
            {mainCategory === '배쓰' && (
              <span>당신에게 향기로운 입욕을 선물합니다</span>
            )}
            {mainCategory === '샤워' && (
              <span>일렁이는 향기와 함께 피부를 건강하게 지켜주세요</span>
            )}
            {mainCategory === '보디' && (
              <span>늘 당신의 피부를 향긋하고 건강하게 빛내줄 거예요</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductsTopBanner;
