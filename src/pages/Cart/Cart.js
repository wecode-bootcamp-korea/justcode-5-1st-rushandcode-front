import React, { useEffect, useState } from 'react';
import css from './Cart.module.scss';
import CartProduct from '../../components/CartProduct/CartProduct';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

function Cart() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const navigate = useNavigate();

  const cartList = JSON.parse(localStorage.getItem('cart'));
  const totalCount = cartList?.length;
  const [totalPrice, setTotalPrice] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(false);
    setTotalPrice(0);
    for (let i = 0; i < cartList?.length; i++) {
      let price = cartList[i]?.totalPrice;
      setTotalPrice(prev => prev + price);
    }
    if (totalCount === 0) {
      setTotalPrice(0);
    }
  }, [isUpdated]);

  const isExist = totalCount === 0 || totalCount === undefined;

  const delCart = () => {
    localStorage.removeItem('cart');
    setIsUpdated(true);
  };

  const order = () => {
    localStorage.removeItem('cart');
    alert('주문이 완료되었습니다!');
    setIsUpdated(true);
  };

  const shopping = () => {
    navigate('/products?mainCategory=배쓰');
  };

  return (
    <div className={css.container}>
      {loading && <Spinner visible={loading} />}
      <h2>SHOPPING CART</h2>
      <table>
        <caption>제품</caption>
        <tbody>
          <tr>
            <th className={css.info}>제품 정보</th>
            <th className={css.count}>수량</th>
            <th className={css.price}>금액</th>
            <th className={css.total_price}>합계 금액</th>
            <th className={css.ship}>배송비</th>
          </tr>
          {cartList &&
            cartList.map((cart, idx) => {
              if (idx === 0)
                return (
                  <CartProduct
                    key={idx}
                    firstProduct={true}
                    cart={cart}
                    setIsUpdated={setIsUpdated}
                  />
                );
              else
                return (
                  <CartProduct
                    key={idx}
                    cart={cart}
                    setIsUpdated={setIsUpdated}
                  />
                );
            })}
        </tbody>
      </table>
      <div className={css.order_price}>
        <span>총 {totalCount || 0}개의 금액</span>{' '}
        <span className={css.price}>
          ₩{' '}
          {isExist
            ? 0
            : totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>{' '}
        + <span>배송비</span>{' '}
        <span className={css.price}>₩ {isExist ? 0 : '2,500'}</span> ={' '}
        <span className={css.price}>총 주문금액</span>{' '}
        <span className={css.total_price}>
          ₩{' '}
          {isExist
            ? 0
            : (totalPrice + 2500)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>
      <button onClick={delCart} className={css.delete_btn}>
        전체 삭제
      </button>
      <div className={css.buttons}>
        <button onClick={shopping}>쇼핑 계속하기</button>
        <button onClick={order}>주문하기</button>
      </div>
    </div>
  );
}

export default Cart;
