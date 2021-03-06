import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ProductReview.module.scss';
import ProductTab from '../ProductTab/ProductTab';
import Review from './Review';
import BASE_URL from '../../config';
import ReviewStar from './ReviewStar';

function ProductReview(props) {
  const { reviewList, setIsUpdated } = props;
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const userName = localStorage.getItem('user_name');
  const userId = localStorage.getItem('user_id');

  const [stars, setStars] = useState(0);
  const handleRadioInput = e => {
    setStars(e.target.value);
  };

  const [content, setContent] = useState('');

  const handleTextInput = e => {
    setContent(e.target.value);
  };

  const writeReviewBtn = () => {
    if (stars === 0) {
      alert('평가를 입력해주세요!');
    } else if (content === '') {
      alert('리뷰 내용을 입력해주세요!');
    } else {
      fetch(`${BASE_URL}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          user_name: userName,
          product_id: productId,
          content,
          stars: stars,
        }),
      })
        .then(res => res.json())
        .then(setContent(''))
        .then(setIsUpdated(true));
    }
  };

  const reviewAlert = () => {
    if (userId === null) {
      alert(
        '쇼핑몰 회원님만 글작성이 가능합니다. \n로그인 후 리뷰를 등록해주세요.'
      );
    }
  };

  const starList = ['★★★★★', '★★★★☆', '★★★☆☆', ' ★★☆☆☆', '★☆☆☆☆'];

  return (
    <div>
      <ProductTab />
      <div className={css.review_container}>
        <div className={css.review_top}>
          <h3 className={css.review_title}>Product Reviews</h3>
          <span>★★★★★</span>
          {reviewList ? <span>{reviewList.length}</span> : <span>0</span>}
        </div>
        <p className={css.review_desc}>
          나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!
        </p>
        <div className={css.review_input}>
          <div className={css.rate}>
            <div className={css.rate_text}>평가</div>
            {starList.map((star, idx) => (
              <ReviewStar
                key={star}
                idx={idx}
                star={star}
                handleRadioInput={handleRadioInput}
              />
            ))}
          </div>
          <div className={css.textarea}>
            <textarea
              value={content}
              onChange={handleTextInput}
              onClick={reviewAlert}
            />
          </div>
          <div className={css.write_button}>
            <button onClick={writeReviewBtn}>후기 작성</button>
          </div>
        </div>
        <div className={css.line} />
        {reviewList?.map(review => {
          return (
            <Review
              key={review.id}
              review={review}
              setIsUpdated={setIsUpdated}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductReview;
