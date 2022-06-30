import React, { useRef, useEffect, useState } from 'react';
import css from './First.module.scss';

function First() {
  const slider = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const ToTalIndex = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex <= ToTalIndex) {
        setCurrentIndex(currentIndex + 1);
        slider.current.style.transform = `translate(-${
          currentIndex * 16.6666
        }%)`;
        slider.current.style.transition = 'all 1s ease-in-out';
      } else if (currentIndex > ToTalIndex) {
        setTimeout(() => {
          slider.current.style.transform = `translate(0%)`;
          slider.current.style.transition = 'all 0s ease-out';
        }, 500);
        slider.current.style.transform = `translate(-83.2%)`;
        slider.current.style.transition = 'all 0.5s ease-out';
        setCurrentIndex(0);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  const first_button = () => {
    slider.current.style.transform = `translate(0vw)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(0);
  };
  const second_button = () => {
    slider.current.style.transform = `translate(-16.6%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(1);
  };
  const third_button = () => {
    slider.current.style.transform = `translate(-33.3%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(2);
  };
  const fourth_button = () => {
    slider.current.style.transform = `translate(-50%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(3);
  };
  const fifth_button = () => {
    slider.current.style.transform = `translate(-66.7%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(4);
  };

  return (
    <>
      <div className={css.wrapercontainer}>
        <div ref={slider} className={css.container}>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200623/scrub01_131910.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200623/dustingpowder02_140617.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200623/shaving02_141759.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200623/massagebars01_134658.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200624/showergeljellies01_100359.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://www.lush.co.kr/data/editor/goods/200623/scrub01_131910.jpg"
              alt="이미지"
            />
          </div>
        </div>
      </div>
      <div className={css.wrapbutton}>
        <button className={css.button} onClick={first_button} />
        <button className={css.button} onClick={second_button} />
        <button className={css.button} onClick={third_button} />
        <button className={css.button} onClick={fourth_button} />
        <button className={css.button} onClick={fifth_button} />
      </div>
    </>
  );
}

export default First;
