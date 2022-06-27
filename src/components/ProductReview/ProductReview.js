import React, { useState } from 'react';
import css from './ProductReview.module.scss';
import ProductTab from '../ProductTab/ProductTab';
import Review from './Review';

function ProductReview(props) {
  const { reviewList } = props;

  const [stars, setStars] = useState(0);
  const handleRadioInput = e => {
    setStars(e.target.value);
  };

  const [text, setText] = useState('');
  const handleTextInput = e => {
    setText(e.target.value);
  };

  // 백엔드 API 완성 시 수정 예정
  // user_id - 로컬 스토리지에서 가져오기
  // product_id 부모 컴포넌트에서 props로 넘겨받기
  // const data = { user_name: 'test', product_id: '12', stars, content: text };

  // const writeReviewBtn = () => {
  //   fetch('http://localhost:10010/reviews', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //   }).then(res => res.json());
  // };

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
            <li>
              <input
                type="radio"
                value={5}
                name="rate"
                onChange={handleRadioInput}
              />
              ★★★★★
            </li>
            <li>
              <input
                type="radio"
                value={4}
                name="rate"
                onChange={handleRadioInput}
              />
              ★★★★☆
            </li>
            <li>
              <input
                type="radio"
                value={3}
                name="rate"
                onChange={handleRadioInput}
              />
              ★★★☆☆
            </li>
            <li>
              <input
                type="radio"
                value={2}
                name="rate"
                onChange={handleRadioInput}
              />
              ★★☆☆☆
            </li>
            <li>
              <input
                type="radio"
                value={1}
                name="rate"
                onChange={handleRadioInput}
              />
              ★☆☆☆☆
            </li>
          </div>
          <div className={css.textarea}>
            <textarea value={text} onChange={handleTextInput} />
          </div>
          <div className={css.write_button}>
            <button
            // onClick={writeReviewBtn}
            >
              후기 작성
            </button>
          </div>
        </div>
        <div className={css.line} />
        {reviewList?.map(review => {
          return (
            <Review
              key={review.id}
              id={review.id}
              userName={review.user_name}
              review={review.content}
              stars={review.stars}
              createdAt={review.created_at}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductReview;
