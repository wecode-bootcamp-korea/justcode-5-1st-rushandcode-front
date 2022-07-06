import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './ProductInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ProductInfo(props) {
  const navigate = useNavigate();

  const { productInfo } = props;
  const { hashtags, name } = productInfo;

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

  const { price } = productInfo;
  const totalPrice = price * count;

  const [mainCategory, setMainCategory] = useState('');
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    setMainCategory(productInfo.main_category);
    setMainList(['배쓰', '샤워', '보디']);
  }, [productInfo.main_category]);

  const sub = productInfo.sub_category;

  let subList;
  if (mainCategory === '배쓰') {
    subList = ['배쓰 밤', '버블 바', '배쓰 오일'];
  } else if (mainCategory === '샤워') {
    subList = ['솝', '샤워 젤', '보디 컨디셔너'];
  } else if (mainCategory === '보디') {
    subList = ['클렌저', '로션', '핸드 앤 풋'];
  }
  const productId = productInfo.id;
  const data = { id: productId, count, totalPrice };
  const addCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let isExist = false;
    const idx = cart?.findIndex(c => c.id === data.id);

    cart.forEach(cartEl => {
      if (cartEl.id === data.id) {
        isExist = true;
      }
    });
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([data]));
    } else {
      if (!isExist) {
        localStorage.setItem(
          'cart',
          JSON.stringify([data, ...JSON.parse(localStorage.getItem('cart'))])
        );
      } else {
        localStorage.setItem(
          'cart',
          JSON.stringify(
            cart.map((obj, index) => {
              if (index === idx) {
                return {
                  ...obj,
                  count: obj.count + data.count,
                  totalPrice: obj.totalPrice + data.totalPrice,
                };
              } else {
                return {
                  ...obj,
                };
              }
            })
          )
        );
      }
    }
    setCount(1);
    if (
      window.confirm('상품이 장바구니에 담겼습니다. \n바로 확인하시겠습니까?')
    ) {
      navigate('/cart');
    }
  };

  const moveToReview = () => {
    window.scrollTo(0, 3600);
  };

  return (
    <div className={css.container}>
      <div className={css.select_container}>
        <div className={css.home}>홈</div>
        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />
        <div className={css.lush}>러쉬</div>
        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />

        <div className={css.main_category}>
          <Link to={`/products?mainCategory=${mainCategory}`}>
            {mainCategory}
          </Link>
          {mainList
            ?.filter(data => data !== mainCategory)
            .map((main, idx) => (
              <Link
                to={`/products?mainCategory=${main}`}
                key={idx}
                value={main}
                className={css.mainList}
              >
                {main}
              </Link>
            ))}
        </div>

        <FontAwesomeIcon icon={faAngleRight} color="lightgray" />

        <div className={css.sub_category}>
          <Link
            to={`/products?mainCategory=${mainCategory}&subCategory=${sub}`}
          >
            {sub}
          </Link>
          {subList
            ?.filter(data => data !== sub)
            .map((sub, idx) => (
              <Link
                to={`/products?mainCategory=${mainCategory}&subCategory=${sub}`}
                key={idx}
                value={sub}
                className={css.subList}
              >
                {sub}
              </Link>
            ))}
        </div>
      </div>

      <div className={css.procuct_name}>{name}</div>
      <div className={css.hashtags}>{hashtags}</div>
      <button className={css.review_btn} onClick={() => moveToReview()}>
        {reviewLength}개의 후기 보기
      </button>
      <div className={css.good_to_know}>Good to Know</div>
      <div className={css.price}>
        <div>판매가</div>
        <div className={css.price_num}>
          ₩ {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
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
        <div className={css.price_num}>
          ₩ {totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <div className={css.sum}>
        <div>총 제품금액</div>
        <div className={css.sum_num}>
          ₩ {totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <div className={css.sum}>
        <div>총 합계금액</div>
        <div className={css.sum_num}>
          ₩ {totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
      <div className={css.buttons}>
        <button onClick={addCart} className={css.cart}>
          장바구니
        </button>
        <button className={css.order}>주문하기</button>
      </div>
    </div>
  );
}

export default ProductInfo;
