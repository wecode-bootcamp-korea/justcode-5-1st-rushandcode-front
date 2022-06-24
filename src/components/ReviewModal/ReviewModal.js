import React, { useEffect } from 'react';
import css from './ReviewModal.module.scss';

const ReviewModal = props => {
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  });
  const { open, close, header, content } = props;
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
            <select>
              <option>★★★★★</option>
              <option>★★★★</option>
              <option>★★★</option>
              <option>★★</option>
              <option>★</option>
            </select>
            <div className={css.textarea_header} />
            <textarea>{content}</textarea>
          </main>
          <footer>
            <button>리뷰등록</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ReviewModal;
