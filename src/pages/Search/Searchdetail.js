import React, { useRef, useState } from 'react';
import css from './Searchdetail.module.scss';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Searchdetail = ({ data }) => {
  const navigate = useNavigate();
  const [on, setOn] = useState('');
  const backImg = useRef();

  const Backimg = styled.div`
    position: absolute;
    width: 20%;
    height: 20%;
    background-image: url(${data.productImages[0].url});
    background-repeat: no-repeat;
    background-size: 1000% 1000%;
    border: 1px solid black;
    pointer-events: none;
    border-radius: 100%;
  `;
  const Img = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-image: url(${data.productImages[0].url});
    background-size: 100% 100%;
    background-position: center;
  `;

  const gotoproduct = () => {
    navigate(`/productdetail/${data.id}`);
  };

  const enter = () => {
    setOn(true);
  };
  const leave = () => {
    setOn(false);
  };
  const move = e => {
    backImg.current.style.left = `${
      e.nativeEvent.offsetX - e.target.getBoundingClientRect().width / 10
    }px`;
    backImg.current.style.top = `${
      e.nativeEvent.offsetY - e.target.getBoundingClientRect().width / 10
    }px`;
    backImg.current.style.backgroundPosition = `-${
      (e.nativeEvent.offsetX - 25) * 2
    }px -${(e.nativeEvent.offsetY - 25) * 2}px`;
  };
  return (
    <div className={css.product}>
      <Img
        onClick={gotoproduct}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onMouseMove={move}
      >
        {on ? <Backimg ref={backImg} /> : null}
      </Img>
      <p className={css.info}>{data.name}</p>
      <p className={css.info}> {data.hashtags}</p>
      <p className={css.info}>{data.price}</p>
    </div>
  );
};

export default Searchdetail;
