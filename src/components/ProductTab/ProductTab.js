import React from 'react';
import css from './ProductTab.module.scss';

function ProductTab() {
  const screenHeight = document.body.scrollHeight;

  const moveToTab = height => {
    window.scrollTo(0, height);
  };
  return (
    <section className={css.tab}>
      <button onClick={() => moveToTab(800)}>상품상세정보</button>
      <button onClick={() => moveToTab(3600)}>상품후기</button>
      <button onClick={() => moveToTab(screenHeight)}>
        배송/교환 및 반품안내
      </button>
    </section>
  );
}

export default ProductTab;
