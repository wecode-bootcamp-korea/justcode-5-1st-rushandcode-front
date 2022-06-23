import React, { useEffect, useRef, useState } from 'react';
import css from './SelectFilter.module.scss';

function SelectFilter(props) {
  const [appear, setAppear] = useState(false);

  const clickDropList = e => {
    setAppear(!appear);
  };

  const outsideRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setAppear(appear);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [outsideRef]);

  const [selectFilter, setSelectFilter] = useState(false);

  const clickChangeFilter = e => {
    setSelectFilter(!selectFilter);
  };

  return (
    <div className={css.select_filter} ref={outsideRef}>
      <div
        className={[css.drop_list, css.drop_list_title].join(' ')}
        onClick={clickDropList}
      >
        추천순
        <span
          className={appear ? css.drop_list_arrow_up : css.drop_list_arrow_down}
        ></span>
      </div>
      <ul
        className={css.select_filter_drop}
        style={{ display: appear ? 'block' : 'none' }}
      >
        {props.option.map(option => (
          <li
            key={option.id}
            value={option.id}
            name={option.name}
            className={
              selectFilter
                ? [css.drop_list, css.active].join(' ')
                : css.drop_list
            }
            onClick={clickChangeFilter}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectFilter;
