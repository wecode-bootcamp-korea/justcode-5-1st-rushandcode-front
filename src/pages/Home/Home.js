import React from 'react';
import First from '../../components/Home/First/First';
import Second from '../../components/Home/Second/Second';
import Thrid from '../../components/Home/Third/Third';
import css from './Home.module.scss';

function Home() {
  return (
    <div className={css.home_container}>
      <First />
      <div className={css.second_banner_wraper}>
        <h2 className={css.banner_text}>나만 알고 싶은 향기</h2>
        <Second />
        <div className={css.wrap_third}>
          <Thrid />
        </div>
      </div>
      <div className={css.flex}>
        <div className={css.left}>
          <img
            className={css.leftImg}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/e862953073188aee27d2907fe8839f1c_17170.jpg"
            alt="배너"
          />
        </div>
        <div className={css.right}>
          <div className={css.right1}>
            <img
              className={css.right1Img}
              src="https://www.lush.co.kr/data/skin/front/howling/img/banner/ad3186c9da095a62e72b632eb37c9c2a_63021.gif"
              alt="배너"
            />
          </div>
          <div className={css.right2}>
            <div className={css.right2 - 1}>
              <img
                className={css.right21Img}
                src="https://www.lush.co.kr/data/skin/front/howling/img/banner/667ef42e533edf0137a9c6eaaec64979_26915.jpg"
                alt="배너"
              />
            </div>
            <div className={css.right2 - 2}>
              <img
                className={css.right22Img}
                src="https://www.lush.co.kr/data/skin/front/howling/img/banner/c34ba0a043fb8a04a3e5b8d636db7b92_36311.jpg"
                alt="배너"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={css.lastBanner}>
        <div className={css.lastBannerLeft}>
          <dl className={css.lastBannerText}>
            <dt className={css.lastBannerMainText}>시네스티지아</dt>
            <dd className={css.lastBannerSubText}>
              개인 맞춤형 보디 트린트먼트 오감을 자극하는 보디 마사지는 긴장을
              풀어주고, 스트레스를 완화하여 활력을 불어넣어 줍니다. 한순간에
              모든 감각을 사로잡는 특별함을 느껴보세요.
            </dd>
          </dl>
        </div>
        <div className={css.lastBannerRight}>
          <img
            className={css.lastBannerRightImg}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/d119de9934bf5f5ddcf265864d5cbb15_87429.gif"
            alt="배너"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
