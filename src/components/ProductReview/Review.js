import React, { useState } from 'react';
import css from './Review.module.scss';
import ReviewModal from '../ReviewModal/ReviewModal';
import BASE_URL from '../../config';

const rate = ['☆☆☆☆☆', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];

function Review(props) {
  const { setIsUpdated, review } = props;
  const { id, user_id, user_name, content, stars, updated_at } = review;
  const time = updated_at?.split(' ')[0];
  const myId = localStorage.getItem('user_id');
  const isMyReview = user_id === Number(myId);

  const delReview = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      fetch(`${BASE_URL}/review/${id}`, {
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
        content={content}
        stars={stars}
        header="상품후기 수정하기"
        id={id}
        setIsUpdated={setIsUpdated}
      />
      <div className={css.review_info}>
        <div className={css.rate}>{rate[stars]}</div>
        <div className={css.date}>{time}</div>
        <div className={css.user_name}>{user_name}</div>
      </div>
      <span className={css.text}>{content}</span>
      <div className={css.buttons}>
        {isMyReview && <button onClick={openModal}>수정</button>}
        {isMyReview && <button onClick={delReview}>삭제</button>}
      </div>
    </div>
  );
}

export default Review;
