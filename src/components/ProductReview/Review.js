import React from 'react';
import css from './Review.module.scss';

function Review(props) {
  const { id, userId, review, stars, createdAt } = props;
  const isMyReview = userId === 'werrrrr';
  let rate;
  if (stars === 1) {
    rate = '★☆☆☆☆';
  } else if (stars === 2) {
    rate = '★★☆☆☆';
  } else if (stars === 3) {
    rate = '★★★☆☆';
  } else if (stars === 4) {
    rate = '★★★★☆';
  } else if (stars === 5) {
    rate = '★★★★★';
  }

  const delBtn = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      // 백엔드 리뷰 API 완성 시 수정 예정
      // fetch(`http://localhost:10010/reivew/${id}`, {
      //   method: 'DELETE',
      // });
      alert('삭제가 완료되었습니다.');
    } else {
      return;
    }
  };
  return (
    <div className={css.container}>
      <div className={css.review_info}>
        <div className={css.rate}>{rate}</div>
        <div className={css.date}>{createdAt}</div>
        <div className={css.username}>{userId}</div>
      </div>
      <span className={css.text}>{review}</span>
      {isMyReview && <button onClick={delBtn}>삭제</button>}
    </div>
  );
}

export default Review;
