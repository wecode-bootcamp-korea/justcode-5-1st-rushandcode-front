import React, { useRef, useEffect, useState } from 'react';
import Secondmap from './Secondmap';
import css from './Second.module.scss';
import BASE_URL from '../../../config';

function Second() {
  const slider = useRef();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products?sort=banner`)
      .then(res => res.json())
      .then(res => setProductData(res.products));
  }, []);

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
