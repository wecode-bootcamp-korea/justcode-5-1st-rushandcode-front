import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBasketShopping,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import logo from './image/rush_logo.png';
import css from './Nav.module.scss';

function Nav() {
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.nav_logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={css.nav_list}>
          <ul className={css.nav_list_all}>
            <li
              className={css.nav_prd}
              onMouseEnter={() => {
                setHideMenu(true);
              }}
              onMouseLeave={() => {
                setHideMenu(false);
              }}
            >
              <Link to="">제품</Link>
              {hideMenu ? <span className={css.selected}></span> : null}
            </li>
            <li className={css.nav_intro}>
              <Link to="">러쉬 소개</Link>
            </li>
            <li className={css.nav_store}>
              <Link to="">매장 안내</Link>
            </li>
            <li className={css.nav_spa}>
              <Link to="">스파</Link>
            </li>
            <li className={css.nav_event}>
              <Link to="">이벤트</Link>
            </li>
          </ul>
        </div>
        <div className={css.nav_icon}>
          <Link to="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
        </div>
      </nav>
      <div
        className={css.prd_category}
        style={{ display: hideMenu ? 'block' : 'none' }}
        onMouseEnter={() => {
          setHideMenu(true);
        }}
        onMouseLeave={() => {
          setHideMenu(false);
        }}
      >
        <div className={css.prd_category_all}>
          <ul className={css.prd_category_bath}>
            <li className={css.main_category}>
              <Link to="/products?mainCategory=배쓰">배쓰</Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=배쓰&subCategory=배쓰 밤">
                배쓰 밤
              </Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=배쓰&subCategory=버블 바">
                버블 바
              </Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=배쓰&subCategory=배쓰 오일">
                배쓰 오일
              </Link>
            </li>
          </ul>
          <ul className={css.prd_category_shower}>
            <li className={css.main_category}>
              <Link to="/products?mainCategory=샤워">샤워</Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=샤워&subCategory=솝">솝</Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=샤워&subCategory=샤워 젤">
                샤워 젤
              </Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=샤워&subCategory=샤워 컨디셔너">
                샤워 컨디셔너
              </Link>
            </li>
          </ul>
          <ul className={css.prd_category_body}>
            <li className={css.main_category}>
              <Link to="/products?mainCategory=보디">보디</Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=보디&subCategory=클렌저">
                클렌저
              </Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=보디&subCategory=로션">
                로션
              </Link>
            </li>
            <li className={css.sub_category}>
              <Link to="/products?mainCategory=보디&subCategory=핸드 앤 풋">
                핸드 앤 풋
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
