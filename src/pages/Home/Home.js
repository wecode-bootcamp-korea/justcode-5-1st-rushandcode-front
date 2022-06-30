import React, { useEffect, useRef, useState } from 'react';
import First from '../../components/Home/First/First';
import Second from '../../components/Home/Second/Second';
import Thrid from '../../components/Home/Third/Third';
import css from './Home.module.scss';

function Home() {
  const text = useRef();

  const [scroll, setScroll] = useState(0);

  const scrollY = () => {
    setScroll(window.scrollY);
    if (scroll > 1500) {
      text.current.style.transform = 'translate(650px)';
    } else if (scroll <= 1500) {
      text.current.style.transform = 'translate(0)';
      text.current.style.transition = 'transform 2s';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollY);
    return () => {
      window.removeEventListener('scroll', scrollY);
    };
  });

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
      <div className={css.line}>
        <p ref={text} className={css.line_text}>
          " 러쉬는 자연에서 얻은 신선한 재료와 동물실험을 하지 않는 정직한
          재료를 사용하여 모든 제품을 손으로 만듭니다.더불어 공정 거래, 인권
          보호, 포장 최소화 등 다양한 캠페인 활동을 통해 기업 윤리와 신념을
          알리고 있습니다. ”
        </p>
      </div>
      <div className={css.lastBanner}>
        <div className={css.lastBannerLeft}>
          <dl className={css.lastBannerText}>
            <dt className={css.lastBannerMainText}>시네스티지아</dt>
            <p className={css.lastBannerSubText}>
              개인 맞춤형 보디 트린트먼트 오감을 자극하는 보디 마사지는 긴장을
              풀어주고, 스트레스를 완화하여 활력을 불어넣어 줍니다. 한순간에
              모든 감각을 사로잡는 특별함을 느껴보세요.
            </p>
          </dl>
        </div>
        <div className={css.lastBannerRight}>
          <img
            className={css.lastBannerRightImg}
            src="https://media4.giphy.com/media/TZN3HY3SZfWw0/giphy.webp?cid=ecf05e47alsh6ws4gzjf5auj1oixd6bdqdbfts4swtdb0c1s&rid=giphy.webp&ct=g"
            alt="배너"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
