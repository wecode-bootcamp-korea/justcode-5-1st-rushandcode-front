import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import css from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const validation = (idText, pwText) => {
    if (!idText.includes('@')) {
      return false;
    }
    if (pwText.length < 7) {
      return false;
    }
    return true;
  };

  const buttonOnClick = () => {
    if (validation(id, password)) {
      navigate('/');
    } else {
      alert('로그인에 실패하였습니다.');
      setId('');
      setPassword('');
    }
  };

  const valid = validation(id, password);

  return (
    <div className={css.container}>
      <div className={css.login}>로그인</div>
      <div className={css.membership}>
        <Link className={css.member} to="/login">
          회원
        </Link>
        <Link className={css.non_member} to="/signup">
          비회원
        </Link>
      </div>
      <div className={css.login_form}>
        <div className={css.id_input}>
          <span className={css.id_icon}>
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png"
              alt="id"
            />
          </span>
          <input
            className={css.login_input}
            name="identify"
            type="email"
            placeholder="아이디"
            value={id}
            onChange={e => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className={css.pw_input}>
          <span className={css.pw_icon}>
            <img
              src="https://img.icons8.com/material-rounded/344/lock--v1.png"
              alt="pw"
            />
          </span>
          <input
            className={css.login_input}
            name="password"
            type="password"
            minLength={5}
            placeholder="비밀번호"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={css.save_id_checkbox}>
          <input type="checkbox" id="checkbox" />
          <span className={css.save_id}>아이디 저장</span>
        </div>
        <button
          className={`${css.login_button} ${valid ? css.active : css.inactive}`}
          disabled={!valid}
          onClick={buttonOnClick}
        >
          로그인
        </button>
      </div>
      <div className={css.forget_password}>
        <span>
          <Link className={css.go_to_signup} to="/signup">
            회원가입
          </Link>
        </span>
        <span>|</span>
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
      </div>
    </div>
  );
}

export default Login;
