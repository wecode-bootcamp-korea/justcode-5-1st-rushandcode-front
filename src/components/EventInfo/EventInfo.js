import React from 'react';
import { Link } from 'react-router-dom';
import css from './EventInfo.module.scss';

function EventInfo() {
  return (
    <div className={css.event_box}>
      <div className={css.event_info}>
        <ul>
          <li className={css.event}>
            <Link to="/eventDetail/1">
              <img
                src="https://lush.co.kr/data/board/upload/event/3c7354a06a9481b4"
                alt="이벤트_1"
              />
              <div className={css.event_text}>
                <p className={css.text_1}>나에게 꼭 맞는 스크럽은?</p>
                <p className={css.text_2}>단짠 단짠, 단짝 찾기</p>
                <p className={css.text_3}>
                  2022.06.25 00:00 - 2022.06.30.23:59
                </p>
              </div>
            </Link>
          </li>
          <li className={css.event}>
            <Link to="/eventDetail/2">
              <img
                src="https://lush.co.kr/data/board/upload/event/ce539fc58ea0ec80"
                alt="이벤트_2"
              />
              <div className={css.event_text}>
                <p className={css.text_1}>젤리쉬 체인저스 클럽</p>
                <p className={css.text_2}>젤리쉬 6기 모집중!</p>
                <p className={css.text_3}>
                  2022.06.08 00:00 - 2022.07.03.23:59
                </p>
              </div>
            </Link>
          </li>
          <li className={css.event}>
            <Link to="/eventDetail/3">
              <img
                src="https://lush.co.kr/data/board/upload/event/ec1557ebbe8dc637"
                alt="이벤트_3"
              />
              <div className={css.event_text}>
                <p className={css.text_1}>6월 포토 리뷰 이벤트</p>
                <p className={css.text_2}>어느 여름날의 한 컷</p>
                <p className={css.text_3}>
                  2022.06.03 00:00 - 2022.06.30.23:59
                </p>
              </div>
            </Link>
          </li>
          <li className={css.event}>
            <Link to="/eventDetail/4">
              <img
                src="https://lush.co.kr/data/board/upload/event/67b595452707b470"
                alt="이벤트_4"
              />
              <div className={css.event_text}>
                <p className={css.text_1}>다운로드 러쉬 6월</p>
                <p className={css.text_2}>여신의 물보라</p>
                <p className={css.text_3}>
                  2022.06.02 00:00 - 2022.06.30.23:59
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfo;
