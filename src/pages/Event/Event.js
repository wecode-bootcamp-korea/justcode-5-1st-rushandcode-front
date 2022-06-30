import React from 'react';
import { Link } from 'react-router-dom';
import EventInfo from '../../components/EventInfo/EventInfo';
import css from './Event.module.scss';

function Event() {
  return (
    <div className={css.container}>
      <div className={css.event_upper_portion}>
        <div className={css.event_title}>EVENT</div>
        <div className={css.search_box}>
          <div className={css.search}>
            <select>
              <option>제목</option>
              <option>내용</option>
            </select>
            <input />
            <button>검색</button>
          </div>
        </div>
        <div className={css.event_tab}>
          <span>
            <Link to="/event">진행중 이벤트</Link>
          </span>
          <span>|</span>
          <span>신청자 발표</span>
          <span>|</span>
          <span>종료된 이벤트</span>
        </div>
      </div>
      <EventInfo />
    </div>
  );
}
export default Event;
