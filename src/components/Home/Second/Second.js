import React, { useRef, useEffect, useState } from 'react';
import Secondmap from './Secondmap';
import css from './Second.module.scss';
import BASE_URL from '../../../config';

function Second() {
  const slider = useRef();
  const [productData, setProductData] = useState([]);
  const [start, setStart] = useState(0);
  const [currentSpot, setCurrentSpot] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/products?sort=banner`)
      .then(res => res.json())
      .then(res => setProductData(res.products));
  }, []);

  const first_button = () => {
    slider.current.style.transform = 'translate(0vw)';
    setCurrentSpot(0);
  };
  const second_button = () => {
    slider.current.style.transform = 'translate(-60vw)';
    setCurrentSpot(660);
  };
  const third_button = () => {
    slider.current.style.transform = 'translate(-120vw)';
    setCurrentSpot(660 * 2);
  };
  const fourth_button = () => {
    slider.current.style.transform = 'translate(-180vw)';
    setCurrentSpot(660 * 3);
  };

  const onMouseDown = e => {
    setStart(e.clientX);
    setIsPressed(true);
    e.target.draggable = false;
    console.log('다운작동중');
  };

  const onMouseUp = e => {
    setCurrentSpot(prev => {
      if (prev < 0) {
        return 0;
      }
      if (prev > 2000) {
        return 2000;
      } else {
        return prev + e.clientX - start;
      }
    });

    setIsPressed(false);
    console.log('업작동중');
  };

  const onMouseLeave = e => {
    setIsPressed(false);
    setCurrentSpot(prev => {
      if (prev < 0) {
        return 0;
      }
      if (prev > 2000) {
        return 2000;
      } else {
        return prev + e.clientX - start;
      }
    });
    console.log('리브작동중');
  };

  const onMouseMove = e => {
    if (isPressed) {
      console.log('프레스 무브 작동중');
      slider.current.style.transition = 'transform 0.1s';
      slider.current.style.transform = `translate(-${
        (currentSpot + e.clientX - start - 45 < 0
          ? 0
          : currentSpot + e.clientX - start - 45,
        currentSpot + e.clientX - start - 45 > 2000)
          ? 2000
          : currentSpot + e.clientX - start - 45
      }px)`;
      console.log(currentSpot + e.clientX - start - 45);
    }
  };
  return (
    <div className={css.wraper}>
      <div
        ref={slider}
        className={css.container}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {productData.map(productData => (
          <Secondmap key={productData.id} productData={productData} />
        ))}
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
