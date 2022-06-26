import React, { useState } from 'react';
import css from './Review.module.scss';
import ReviewModal from '../ReviewModal/ReviewModal';

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

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.container}>
      <ReviewModal
        close={closeModal}
        open={modalOpen}
        content="test"
        stars="1"
        header="상품후기 수정하기"
      />
      <div className={css.review_info}>
        <div className={css.rate}>{rate}</div>
        <div className={css.date}>{createdAt}</div>
        <div className={css.username}>{userId}</div>
      </div>
      <span className={css.text}>{review}</span>
      <div className={css.buttons}>
        <button onClick={openModal}>수정</button>
        {isMyReview && <button onClick={delBtn}>삭제</button>}
      </div>
    </div>
  );
}

export default Review;