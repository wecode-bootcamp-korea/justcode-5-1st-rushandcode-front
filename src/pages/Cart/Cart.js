import React, { useEffect, useState } from 'react';
import css from './Cart.module.scss';
import CartProduct from '../../components/CartProduct/CartProduct';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const cartList = JSON.parse(localStorage.getItem('cart'));
  const totalCount = cartList?.length;
  let [totalPrice, setTotalPrice] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(false);
    for (let i = 0; i < cartList?.length; i++) {
      let price = cartList[i]?.totalPrice;
      setTotalPrice(prev => prev + price);
    }
    if (totalCount === 0) {
      setTotalPrice(0);
    }
  }, [isUpdated]);

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
                  <CartProduct key={idx} firstProduct={true} cart={cart} />
                );
              else return <CartProduct key={idx} cart={cart} />;
            })}
        </tbody>
      </table>
      <div className={css.order_price}>
        <span>총 {totalCount}개의 금액</span>{' '}
        <span className={css.price}>
          ₩ {totalCount !== undefined ? totalPrice : 0}
        </span>{' '}
        + <span>배송비</span>{' '}
        <span className={css.price}>
          ₩ {totalCount !== undefined ? 2500 : 0}
        </span>{' '}
        = <span className={css.price}>총 주문금액</span>{' '}
        <span className={css.total_price}>
          ₩ {totalCount !== undefined ? totalPrice + 2500 : 0}
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
