import React, { useState, useEffect } from 'react';
import css from './ProductInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ProductInfo(props) {
  const { productInfo } = props;
  const [count, setCount] = useState(1);

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const reviewLength = productInfo?.productReviews?.length || 0;
  const weight = productInfo?.weight;

  let { price } = productInfo;
  let totalPrice = price * count;

  const [mainCategory, setMainCategory] = useState('');
  const handleMainSelect = e => {
    setMainCategory(e.target.value);
  };
  useEffect(() => {
    setMainCategory(productInfo.main_category);
  }, [productInfo.main_category]);

  const [subCategory, setSubCategory] = useState('');
  const handleSubSelect = e => {
    setSubCategory(e.target.value);
  };
  useEffect(() => {
    setSubCategory(productInfo.sub_category);
  }, [productInfo.sub_category]);

  return (
    <div className={css.container}>
      <div className={css.select_container}>
        <div className={css.home}>홈</div>
        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />
        <div className={css.lush}>러쉬</div>
        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />

        <div className={css.main_category}>
          <select value={mainCategory} onChange={handleMainSelect}>
            <option value="배쓰">배쓰</option>
            <option value="샤워">샤워</option>
            <option value="보디">보디</option>
          </select>
        </div>

        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />

        <div className={css.sub_category}>
          <select value={subCategory} onChange={handleSubSelect}>
            <option value="배쓰 밤">배쓰 밤</option>
            <option value="버블 바">버블 바</option>
            <option value="배쓰 오일">배쓰 오일</option>
          </select>
        </div>
      </div>

      <div className={css.procuct_name}>더티</div>
      <div className={css.hashtags}>#배쓰밤 #파더스 #아빠에게</div>
      <div className={css.text}>{reviewLength}개의 후기 보기</div>
      <div className={css.text}>Good to Know</div>
      <div className={css.price}>
        <div>판매가</div>
        <div className={css.price_num}>₩ {price}</div>
      </div>
      <div className={css.weight}>
        <div>상품무게</div>
        <div className={css.weight_num}>{weight}g</div>
      </div>
      <div className={css.buy_count}>
        <div className={css.count}>구매수량</div>
        <div className={css.buy_input}>
          <button onClick={countDown}>-</button>
          <input disabled type="number" value={count} />
          <button onClick={countUp}>+</button>
        </div>
        <div className={css.price_num}>₩ {totalPrice}</div>
      </div>
      <div className={css.sum}>
        <div>총 제품금액</div>
        <div className={css.sum_num}>₩ {totalPrice}</div>
      </div>
      <div className={css.sum}>
        <div>총 합계금액</div>
        <div className={css.sum_num}>₩ {totalPrice}</div>
      </div>
      <div className={css.buttons}>
        <button className={css.cart}>장바구니</button>
        <button className={css.order}>주문하기</button>
      </div>
    </div>
  );
}

export default ProductInfo;
