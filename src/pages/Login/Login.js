import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../config';
import css from './Login.module.scss';
import Spinner from '../../components/Spinner/Spinner';

function Login() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [loginValue, setLoginValue] = useState({
    id: '',
    password: '',
  });
  const { id, password } = loginValue;

  const onChange = e => {
    const { value, name } = e.target;
    setLoginValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();
  const gotomain = () => {
    navigate('/');
  };

  const dataFetch = () => {
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name: id,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          localStorage.setItem('token', res.data[0]);
          localStorage.setItem('user_name', res.data[1].user_name);
          localStorage.setItem('user_id', res.data[1].id);
        } else {
          const error = new Error('잘못된 아이디이거나 비밀번호입니다.');
          error.statusCode = 400;
          throw error;
        }
      })
      .then(() => {
        gotomain();
      })
      .catch(err => {
        alert(err.message);
        setLoginValue({
          id: '',
          password: '',
        });
      });
  };

  const validation = (idText, pwText) => {
    if (idText.length < 1 || pwText.length < 7) {
      return false;
    }
    return true;
  };

  const valid = validation(id, password);

  return (
    <div className={css.container}>
      {loading && <Spinner visible={loading} />}
      <div className={css.login_box}>
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
              name="id"
              type="email"
              placeholder="아이디"
              value={id}
              onChange={onChange}
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
              onChange={onChange}
            />
          </div>
          <div className={css.save_id_checkbox}>
            <input type="checkbox" id="checkbox" />
            <span className={css.save_id}>아이디 저장</span>
          </div>
          <button
            className={`${css.login_button} ${
              valid ? css.active : css.inactive
            }`}
            disabled={!valid}
            onClick={dataFetch}
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
    </div>
  );
}

export default Login;
