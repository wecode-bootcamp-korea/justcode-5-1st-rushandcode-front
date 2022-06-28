import React, { useEffect, useState } from 'react';
import css from './ReviewModal.module.scss';

const ReviewModal = props => {
  const { open, close, header, content, stars, id, setIsUpdated } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [open]);

  const [text, setText] = useState(content);
  const handleTextarea = e => {
    setText(e.target.value);
  };

  const [select, setSelect] = useState(stars);
  const handleSelect = e => {
    setSelect(e.target.value);
  };

  const EditReviewBtn = () => {
    if (text === '') {
      alert('리뷰 내용을 입력해주세요!');
    } else {
      fetch(`http://localhost:10010/review/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          content: text,
          stars: select,
        }),
      })
        .then(res => res.json())
        .then(close)
        .then(setIsUpdated(true));
    }
  };

  return (
    <div className={open ? `${css.openModal} ${css.modal}` : css.modal}>
      {open ? (
        <section>
          <header>
            {header}
            <button className={css.close} onClick={close}>
              &times;
            </button>
          </header>
          <main className={css.textarea}>
            <select value={select} onChange={handleSelect}>
              <option value="5">★★★★★</option>
              <option value="4">★★★★</option>
              <option value="3">★★★</option>
              <option value="2">★★</option>
              <option value="1">★</option>
            </select>
            <div className={css.textarea_header} />
            <textarea value={text} onChange={handleTextarea} />
          </main>
          <footer>
            <button onClick={EditReviewBtn}>리뷰등록</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ReviewModal;
