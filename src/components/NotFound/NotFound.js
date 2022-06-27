import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../elements/Image';
import css from './NotFound.module.scss';

function NotFound(props) {
  const navigate = useNavigate();
  const { productDetail } = props;

  useEffect(() => {
    if (productDetail) {
      alert('해당 상품은 현재 구매가 불가한 상품입니다.');
      navigate(-1);
    }
  }, [productDetail, navigate]);
  return (
    <div>
      {!productDetail && (
        <div className={css.container}>
          <div>
            <Image
              size="100"
              src="https://t3.ftcdn.net/jpg/00/58/02/22/240_F_58022217_LwV816qZMbDGgnyWtPaBkw6Mic07p7U0.jpg"
            />
          </div>
          <div className={css.bottom}>
            <h1>
              요청하신 페이지를 <span>찾을 수 없습니다.</span>
            </h1>
            <div>오류 관련 문의는 0000-0000로 연락하시기 바랍니다.</div>
            <div>서비스 이용에 불편을 드려서 죄송합니다.</div>
            <div className={css.buttons}>
              <button onClick={() => navigate(-1)}>뒤로가기</button>
              <button onClick={() => navigate('/')}>홈 바로가기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotFound;
