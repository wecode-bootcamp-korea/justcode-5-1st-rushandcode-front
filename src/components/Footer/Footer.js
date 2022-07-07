import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Nav/image/rush_logo.png';

import css from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  return (
    <>
      <div className={css.footer_banner}>
        <video
          className={css.video}
          src="https://player.vimeo.com/external/538877060.hd.mp4?s=4042b4dc217598f5ce7c4cf8b8c3787b42218ea3&profile_id=174"
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>
      <div className={css.footer_info}>
        <img onClick={goToMain} className={css.logo} alt="이미지" src={logo} />
        <ul className={css.footer_info_ul}>
          <li className={css.footer_info_li}>스카우트</li>
          <li className={css.footer_info_li}>회사소개</li>
          <li className={css.footer_info_li}>개인정보처리방침</li>
          <li className={css.footer_info_li}>영상정보관리지침</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
