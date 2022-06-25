import React, { useRef } from 'react';
import css from './Second.module.scss';

function Second() {
  const slider = useRef();

  const first_button = () => {
    slider.current.style.transform = 'translate(0vw)';
    slider.current.style.transition = 'transform 1s';
  };
  const second_button = () => {
    slider.current.style.transform = 'translate(-60vw)';
    slider.current.style.transition = 'transform 1s';
  };
  const third_button = () => {
    slider.current.style.transform = 'translate(-120vw)';
    slider.current.style.transition = 'transform 1s';
  };
  const fourth_button = () => {
    slider.current.style.transform = 'translate(-180vw)';
    slider.current.style.transition = 'transform 1s';
  };

  return (
    <div className={css.wraper}>
      <div ref={slider} className={css.container}>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/20/38/38_main_032.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/15/01/07/152/152_main_065.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/20/38/38_main_032.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/20/15/15_main_020.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/25/88/88_main_058.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/20/41/41_main_088.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/11/01/20/76/76_main_063.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/17/08/16/246/246_main_060.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/12/03/07/97/97_main_074.jpg"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/22/04/14/1000002127/1000002127_main_063.png"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/22/04/14/1000002126/1000002126_main_0100.png"
            alt="사진"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://www.lush.co.kr/data/goods/22/04/14/1000002135/1000002135_main_078.jpg"
            alt="사진"
          />
        </div>
      </div>
      <div className={css.wrap_button}>
        <button className={css.button} onClick={first_button} />
        <button className={css.button} onClick={second_button} />
        <button className={css.button} onClick={third_button} />
        <button className={css.button} onClick={fourth_button} />
      </div>
    </div>
  );
}

export default Second;
