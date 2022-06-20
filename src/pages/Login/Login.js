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
        <Link className={css.nonMember} to="/signup">
          비회원
        </Link>
      </div>
      <div className={css.loginForm}>
        <div className={css.idInput}>
          <span className={css.idIcon}>
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png"
              alt="id"
            />
          </span>
          <input
            className={css.loginInput}
            name="identify"
            type="email"
            placeholder="아이디"
            value={id}
            onChange={e => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className={css.pwInput}>
          <span className={css.pwIcon}>
            <img
              src="https://img.icons8.com/material-rounded/344/lock--v1.png"
              alt="pw"
            />
          </span>
          <input
            className={css.loginInput}
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
        <div className={css.saveIdCheckbox}>
          <input type="checkbox" id="checkbox" />
          <span className={css.saveId}>아이디 저장</span>
        </div>
        <button
          className={`${css.loginButton} ${valid ? css.active : css.inactive}`}
          disabled={!valid}
          onClick={buttonOnClick}
        >
          로그인
        </button>
      </div>
      <div className={css.forgetPassword}>
        <span>
          <Link className={css.goToSignup} to="/signup">
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
