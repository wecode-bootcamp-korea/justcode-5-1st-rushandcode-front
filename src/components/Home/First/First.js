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
        slider.current.style.transform = `translate(-${currentIndex * 20}%)`;
        slider.current.style.transition = 'all 2s ease-in-out';
      } else if (currentIndex > ToTalIndex) {
        slider.current.style.transform = `translate(0vw)`;
        slider.current.style.transition = 'all 0s ease-out';
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
    slider.current.style.transform = `translate(-20%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(1);
  };
  const third_button = () => {
    slider.current.style.transform = `translate(-40%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(2);
  };
  const fourth_button = () => {
    slider.current.style.transform = `translate(-60%)`;
    slider.current.style.transition = `transform 1s`;
    setCurrentIndex(3);
  };
  const fifth_button = () => {
    slider.current.style.transform = `translate(-80%)`;
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
              src="https://lush.co.kr/data/editor/goods/200624/perfume01_134035.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2018/05/23/22/37/chinchillas-3425370__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2016/11/29/04/42/conifers-1867371__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2021/02/06/14/24/lavanttal-5988332__340.jpg"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279__480.jpg"
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
