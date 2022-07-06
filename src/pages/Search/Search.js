import React, { useEffect, useState } from 'react';
import css from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import Searchdetail from './Searchdetail';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:10010/products`)
      .then(res => res.json())
      .then(res => setData(res.products));
  }, []);

  const filter = filterData.filter(products =>
    products.name.includes(`${value}`)
  );

  const name = source => {
    const query = source.split('');
    if (query.length >= 3) {
      const slice = query.slice(2);
      const rest = slice.join('');
      return query[0] + query[1] + '%20' + rest;
    } else {
      return query[0] + '%20';
    }
  };
  const body = source => {
    if (source.length < 4) {
      return source;
    } else {
      const split = source.split('');
      return split[0] + split[1] + '%20' + split[2] + '%20' + split[3];
    }
  };
  useEffect(() => {
    if (value === '배쓰' || value === '샤워' || value === '보디') {
      navigate(`/products?mainCategory=${value}`);
    } else if (
      value === '배쓰밤' ||
      value === '버블바' ||
      value === '배쓰오일'
    ) {
      navigate(`/products?mainCategory=배쓰&subCategory=${name(value)}`);
    } else if (
      value === '솝' ||
      value === '샤워젤' ||
      value === '보디컨디셔너'
    ) {
      navigate(`/products?mainCategory=샤워&subCategory=${name(value)}`);
    } else if (value === '클렌저' || value === '로션' || value === '핸드앤풋') {
      navigate(`/products?mainCategory=보디&subCategory=${body(value)}`);
    }
  }, [value]);
  return (
    <>
      <div className={css.wrapBar}>
        <input
          className={css.searchBar}
          type="text"
          placeholder="원하시는 제품을 검색하세요."
          onKeyPress={e => {
            if (e.key === 'Enter') {
              setValue(e.target.value);
              setFilterData(data);
            }
          }}
        />
      </div>
      <p className={css.howMany}>검색결과 {filter.length}개 </p>
      <div className={css.wrapdetail}>
        {filter.map(data => (
          <Searchdetail key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Search;
