import React, { useState } from 'react';
import css from './Review.module.scss';
import ReviewModal from '../ReviewModal/ReviewModal';

function Review() {
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
        <div className={css.rate}>★★★★★</div>
        <div className={css.date}>2022.05.31</div>
        <div className={css.username}>김코드</div>
      </div>
      <span className={css.text}>텍스트</span>
      <div className={css.buttons}>
        <button onClick={openModal}>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default Review;
