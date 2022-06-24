import React from 'react';
import css from './ReviewModal.module.scss';

const ReviewModal = props => {
  const { open, close, header } = props;
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
            <textarea>{props.children}</textarea>
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
