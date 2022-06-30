import React, { useState } from 'react';
import css from './Review.module.scss';
import ReviewModal from '../ReviewModal/ReviewModal';

function Review(props) {
  const { id, userId, userName, review, stars, createdAt, setIsUpdated } =
    props;
  const time = createdAt.split(' ')[0];
  const myId = localStorage.getItem('user_id');
  const isMyReview = userId === Number(myId);

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

  const delReview = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      fetch(`http://localhost:10010/review/${id}`, {
        method: 'DELETE',
      })
        .then(alert('삭제가 완료되었습니다.'))
        .then(setIsUpdated(true));
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
        content={review}
        stars={stars}
        header="상품후기 수정하기"
        id={id}
        setIsUpdated={setIsUpdated}
      />
      <div className={css.review_info}>
        <div className={css.rate}>{rate}</div>
        <div className={css.date}>{time}</div>
        <div className={css.username}>{userName}</div>
      </div>
      <span className={css.text}>{review}</span>
      <div className={css.buttons}>
        {isMyReview && <button onClick={openModal}>수정</button>}
        {isMyReview && <button onClick={delReview}>삭제</button>}
      </div>
    </div>
  );
}

export default Review;
