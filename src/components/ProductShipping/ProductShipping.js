import React from 'react';
import ProductTab from '../ProductTab/ProductTab';
import css from './ProductShipping.module.scss';

function ProductShipping() {
  return (
    <div className={css.container}>
      <ProductTab />
      <div>
        <div className={css.desc}>
          배송비: 기본배송료는 2500원 입니다. (도서,산간,오지 일부지역은
          배송비가 추가될 수 있습니다.)
        </div>
        <div className={css.desc}>택배사: 우체국 택배를 이용합니다.</div>
        <div className={css.desc}>
          배송가능지역: 국내 배송 / 해외 배송은 불가 합니다.
        </div>
      </div>
      <div className={css.exchange_container}>
        <div className={css.desc}>홈페이지에서 구매한 경우</div>
        <div className={css.desc}>
          러쉬코리아 홈페이지에서 구매한 제품은 홈페이지를 통해서만 교환이
          가능합니다.
        </div>
        <div className={css.desc}>
          고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급 받은 날로부터
          7일 이내 가능하며, 미 개봉 제품만 가능합니다.
        </div>
      </div>
    </div>
  );
}

export default ProductShipping;
