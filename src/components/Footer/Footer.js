import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  return (
    <div className={css.container}>
      <div className={css.footer_banner}>
        <img
          className={css.footer_img}
          src="https://img.lush.co.kr/images/core/footer-icons.svg"
          alt="이미지"
        />
      </div>
      <div className={css.footer_info}>
        <img
          onClick={goToMain}
          className={css.logo}
          alt="이미지"
          src="https://www.lush.co.kr/data/skin/front/howling/img/banner/1bb87d41d15fe27b500a4bfcde01bb0e_24213.png"
        />
        <ul className={css.footer_info_ul}>
          <li className={css.footer_info_li}>스카우트</li>
          <li className={css.footer_info_li}>회사소개</li>
          <li className={css.footer_info_li}>개인정보처리방침</li>
          <li className={css.footer_info_li}>영상정보관리지침</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
