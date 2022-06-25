import React from 'react';
import css from './First.module.scss';

function First() {
  return (
    <>
      <div className={css.wrapercontainer}>
        <div className={css.container}>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="이미지"
            />
          </div>
          <div className={css.inner}>
            <img
              className={css.img}
              src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="이미지"
            />
          </div>
        </div>
      </div>
      <div className={css.wrapbutton}>
        <button className={css.button} />
        <button className={css.button} />
        <button className={css.button} />
        <button className={css.button} />
        <button className={css.button} />
      </div>
    </>
  );
}

export default First;
