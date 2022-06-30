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
            src="https://images.unsplash.com/photo-1656496423877-0a6c761092af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://images.unsplash.com/photo-1656428405664-c8e45ff8e7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://images.unsplash.com/photo-1656183514629-5d63bccae4b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="이미지"
          />
        </div>
        <div className={css.inner}>
          <img
            className={css.img}
            src="https://images.unsplash.com/photo-1656425482626-bcb408b00383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
