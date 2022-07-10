import React, { useRef } from 'react';
import css from './Searchdetail.module.scss';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Searchdetail = ({ data }) => {
  const navigate = useNavigate();
  const backImg = useRef();

  const Backimg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${data.productImages[0].url});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s ease-out;
    object-fit: cover;
  `;
  const Img = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    cursor: pointer;
    background-image: url(${data.productImages[0].url});
    background-size: cover;
    overflow: hidden;
  `;

  const gotoproduct = () => {
    navigate(`/productdetail/${data.id}`);
  };

  const enter = () => {
    backImg.current.style.transform = 'scale(2)';
  };
  const leave = () => {
    backImg.current.style.transform = 'scale(1)';
  };
  const move = e => {
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.offsetY);
    backImg.current.style.transformOrigin = `${e.nativeEvent.offsetX}px ${e.nativeEvent.offsetY}px`;
  };
  return (
    <div className={css.product}>
      <Img
        onClick={gotoproduct}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onMouseMove={move}
      >
        <Backimg ref={backImg} />
      </Img>
      <p className={css.info}>{data.name}</p>
      <p className={css.info}> {data.hashtags}</p>
      <p className={css.info}>{data.price}</p>
    </div>
  );
};

export default Searchdetail;
