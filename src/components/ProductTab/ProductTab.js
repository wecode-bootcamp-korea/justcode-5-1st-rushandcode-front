import React from 'react';
import css from './ProductTab.module.scss';
import { Link } from 'react-router-dom';

function ProductTab() {
  return (
    <section className={css.tab}>
      <Link to>상품상세정보</Link>
      <Link to>상품후기</Link>
      <Link to>배송/교환 및 반품안내</Link>
    </section>
  );
}

export default ProductTab;
