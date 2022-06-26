import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(props) {
  const navigate = useNavigate();
  const { productDetail } = props;
  useEffect(() => {
    if (productDetail) {
      alert('해당 상품은 현재 구매가 불가한 상품입니다.');
      navigate('/');
    }
  }, [productDetail, navigate]);
  return <div>404 Not Found</div>;
}

export default NotFound;
