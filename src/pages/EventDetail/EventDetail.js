import React from 'react';
import css from './EventDetail.module.scss';
import { useLocation } from 'react-router-dom';
import EventInfo from '../../components/EventInfo/EventInfo';

function EventDetail() {
  const id = useLocation().pathname.split('/')[2] - 1;
  const eventData = [
    {
      id: 1,
      img_url:
        'https://i.pinimg.com/564x/7b/cf/9f/7bcf9fd06731087ef9edce2a35fd2cfa.jpg',
      text_1: '나에게 꼭 맞는 스크럽은?',
      text_2: '단짠 단짠, 단짝 찾기',
      text_3: '2022.06.25',
    },
    {
      id: 2,
      img_url:
        'https://i.pinimg.com/564x/9d/bf/92/9dbf9231d012da9920795a8eaaa8e7de.jpg',
      text_1: '젤리쉬 체인저스 클럽',
      text_2: '젤리쉬 6기 모집중!',
      text_3: '2022.06.03',
    },
    {
      id: 3,
      img_url:
        'https://i.pinimg.com/564x/63/6f/05/636f0501be759428154047b42b357009.jpg',
      text_1: '6월 포토 리뷰 이벤트',
      text_2: '어느 여름날의 한 컷',
      text_3: '2022.06.25',
    },
    {
      id: 4,
      img_url:
        'https://i.pinimg.com/564x/74/9e/c7/749ec7045cdef6bca3c4d1bbe0ad9670.jpg',
      text_1: '다운로드 러쉬 6월',
      text_2: '여신의 물보라',
      text_3: '2022.06.02',
    },
  ];
  return (
    <div className={css.container}>
      <div className={css.event_upper_portion}>
        <div className={css.event_title}>EVENT</div>
        <div className={css.event_text}>
          <p className={css.text_3}>{eventData[id].text_3}</p>
          <p className={css.text_1}>{eventData[id].text_1}</p>
          <p className={css.text_2}>{eventData[id].text_2}</p>
        </div>
        <img src={eventData[id].img_url} alt="이미지" />
        <div className={css.ongoing_event}>진행 중인 이벤트</div>
      </div>
      <EventInfo />
    </div>
  );
}
export default EventDetail;
