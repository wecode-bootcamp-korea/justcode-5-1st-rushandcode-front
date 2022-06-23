import React from 'react';
import css from './ProductReview.module.scss';
import ProductTab from '../ProductTab/ProductTab';
import Review from './Review';

function ProductReview() {
  return (
    <div>
      <ProductTab />
      <div className={css.review_container}>
        <div className={css.review_top}>
          <h3 className={css.review_title}>Product Reviews</h3>
          <span>★★★★★</span>
          <span>2</span>
        </div>
        <p className={css.review_desc}>
          나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!
        </p>
        <div className={css.review_input}>
          <div className={css.rate}>
            <div className={css.rate_text}>평가</div>
            <li>
              <input type="radio" value={5} />
              ★★★★★
            </li>
            <li>
              <input type="radio" value={4} />
              ★★★★☆
            </li>
            <li>
              <input type="radio" value={3} />
              ★★★☆☆
            </li>
            <li>
              <input type="radio" value={2} />
              ★★☆☆☆
            </li>
            <li>
              <input type="radio" value={1} />
              ★☆☆☆☆
            </li>
          </div>
          <div className={css.textarea}>
            <textarea />
          </div>
          <div className={css.write_button}>
            <button>후기 작성</button>
          </div>
        </div>
        <div className={css.line} />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}

export default ProductReview;
