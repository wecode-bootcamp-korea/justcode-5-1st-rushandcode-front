import React from 'react';
import css from './Review.module.scss';

function Review() {
  return (
    <div className={css.container}>
      <div className={css.review_info}>
        <div className={css.rate}>★★★★★</div>
        <div className={css.date}>2022.05.31</div>
        <div className={css.username}>김코드</div>
      </div>
      <span className={css.text}>텍스트</span>
      <button>삭제</button>
    </div>
  );
}

export default Review;
