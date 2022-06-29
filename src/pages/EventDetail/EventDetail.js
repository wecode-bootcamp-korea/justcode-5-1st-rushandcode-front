import React from 'react';
import css from './EventDetail.module.scss';
import { useLocation } from 'react-router-dom';
import EventInfo from '../../components/EventInfo/EventInfo';

function EventDetail() {
  const id = useLocation().pathname.split('/')[2] - 1;
  const eventData = [
    {
      id: 1,
      img_url: 'https://lush.co.kr/data/board/upload/event/3c7354a06a9481b4',
    },
    {
      id: 2,
      img_url: 'https://lush.co.kr/data/board/upload/event/ce539fc58ea0ec80',
    },
    {
      id: 3,
      img_url: 'https://lush.co.kr/data/board/upload/event/ec1557ebbe8dc637',
    },
    {
      id: 4,
      img_url: 'https://lush.co.kr/data/board/upload/event/67b595452707b470',
    },
  ];
  return (
    <div className={css.container}>
      <div className={css.event_upper_portion}>
        <div className={css.event_title}>EVENT</div>
        <img src={eventData[id].img_url} alt="이미지1" />
        <div className={css.ongoing_event}>진행 중인 이벤트</div>
      </div>
      <EventInfo />
    </div>
  );
}
export default EventDetail;
