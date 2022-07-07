import React, { useRef, useEffect, useState } from 'react';
import css from './First.module.scss';
import { Modal } from './Modal';
function First() {
  const slider = useRef();

  const [onOff, setOnOff] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const ToTalIndex = 4;

  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex <= ToTalIndex) {
        setCurrentIndex(prev => prev + 1);
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

  const onMouseUp = e => {
    e.target.style.cursor = 'grab';
    if (e.clientX - start > 300 && currentIndex < 4) {
      slider.current.style.transform = `translate(-${
        (currentIndex + 1) * 16.6666
      }%)`;
      slider.current.style.transition = `transform 1s`;
      setCurrentIndex(prev => prev + 1);
    }
    if (e.clientX - start > 300 && currentIndex === 4) {
      setOnOff(prev => !prev);
    }
    if (e.clientX - start < -300 && currentIndex > 0) {
      slider.current.style.transform = `translate(-${
        (currentIndex - 1) * 16.6666
      }%)`;
      slider.current.style.transition = `transform 1s`;
      setCurrentIndex(prev => prev - 1);
    }
    if (e.clientX - start < -300 && currentIndex === 0) {
      setOnOff(prev => !prev);
    }
  };

  return (
    <>
      <div className={css.wraper_container}>
        {onOff ? (
          <Modal setOnOff={setOnOff} currentIndex={currentIndex} />
        ) : null}
        <div
          ref={slider}
          className={css.container}
          onMouseDown={e => {
            e.target.draggable = false;
            e.target.style.cursor = 'grabbing';
            setStart(e.clientX);
          }}
          onMouseUp={onMouseUp}
        >
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
      <div className={css.wrap_button}>
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
