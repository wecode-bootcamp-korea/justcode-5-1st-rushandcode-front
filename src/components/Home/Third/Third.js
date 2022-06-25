import React, { useRef, useState, useEffect } from 'react';
import css from './Third.module.scss';

function Third() {
  const pages = 3;
  const [page, setPage] = useState(0);
  const refContainer = useRef();

  const prev = () => {
    if (page <= 0) {
      setPage(pages);
    } else {
      setPage(page - 1);
    }
  };
  const next = () => {
    if (page >= pages) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    refContainer.current.style.transform = `translate(-${page * 25}vw)`;
    refContainer.current.style.transition = 'transform 1s';
  }, [page]);
  return (
    <div className={css.wrap_container}>
      <div ref={refContainer} className={css.container}>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/7f3fd9719bca21ead3d434221d88df2c_40735.jpg"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/923aef9cb48ab21dcdb4fb7f4a1c9ff9_38076.jpg"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/0004b1553334913278b4231d96b5047f_46735.jpg"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/skin/front/howling/img/banner/3a55b0d9c3683181eea074c1022d0ddc_84143.jpg"
            alt="이미지"
          />
        </div>
      </div>
      <div className={css.prev} onClick={prev} />
      <div className={css.next} onClick={next} />
    </div>
  );
}

export default Third;
