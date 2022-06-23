import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Signup.module.scss';

const point = 'https://img.icons8.com/emoji/344/red-square-emoji.png';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const gotologin = () => {
    navigate('/login');
  };

  const validation = (idText, pwText, checkPwText, nameText) => {
    if (idText.length < 4) {
      return false;
    }
    if (pwText.length < 7) {
      return false;
    }
    if (pwText !== checkPwText) {
      return false;
    }
    if (nameText.length < 1) {
      return false;
    }
    return true;
  };

  const buttonOnClick = () => {
    if (validation(id, password, checkPassword, name)) {
      gotologin();
    } else alert('회원가입에 실패하였습니다.');
  };

  const valid = validation(id, password, checkPassword, name);

  return (
    <div className={css.container}>
      <div className={css.signup_upper_portion}>
        <div className={css.join_us}>JOIN US</div>
        <div className={css.join_us_step}>
          <span>약관동의</span>
          <span>&gt;</span>
          <span className={css.input_info}>정보입력</span>
          <span>&gt;</span>
          <span>가입완료</span>
        </div>
      </div>
      <div className={css.signup_form}>
        <div className={css.basic_info_box}>
          <div className={css.basic_info}>기본정보</div>
          <span>
            <img src={point} alt="point" />
            표시는 반드시 입력하셔야 하는 항목입니다.
          </span>
        </div>
        <div className={css.table}>
          <div className={css.tr_id}>
            <span className={css.th_id}>
              <img src={point} alt="point" />
              아이디
            </span>
            <input
              className={css.id_input}
              name="id"
              type="text"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
            />
          </div>
          {id.length > 0 && id.length < 4 && (
            <div className={css.id_invalid}>최소 4 이상 입력해주세요.</div>
          )}
          {id.length >= 4 && (
            <div className={css.id_valid}>사용가능한 아이디 입니다.</div>
          )}
          <div className={css.tr_pw}>
            <span className={css.th_pw}>
              <img src={point} alt="point" />
              비밀번호
            </span>
            <input
              className={css.pw_input}
              name="password"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {password.length > 0 && password.length < 7 && (
            <div className={css.password_invalid}>
              최소 7 이상 입력해주세요.
            </div>
          )}
          {password.length >= 7 && (
            <div className={css.password_valid}>안전한 비밀번호 입니다.</div>
          )}
          <div className={css.tr_pw_check}>
            <span className={css.th_pw_check}>
              <img src={point} alt="point" />
              비밀번호 확인
            </span>
            <input
              className={css.pw_check_input}
              name="passwordCheck"
              type="password"
              value={checkPassword}
              onChange={e => {
                setCheckPassword(e.target.value);
              }}
            />
          </div>
          {checkPassword.length > 0 && password !== checkPassword && (
            <div className={css.password_invalid}>
              비밀번호가 서로 다릅니다.
            </div>
          )}
          <div className={css.tr_name}>
            <span className={css.th_name}>
              <img src={point} alt="point" />
              이름
            </span>
            <input
              className={css.name_input}
              name="name"
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={css.tr_nick_name}>
            <span className={css.th_nick_name}>닉네임</span>
            <input
              className={css.nick_name_input}
              name="nickName"
              type="text"
            />
          </div>
          <div className={css.tr_email}>
            <span className={css.th_email}>이메일</span>
            <input className={css.email_input} name="email" type="text" />
            <select>
              <option>직접입력</option>
              <option>naver.com</option>
              <option>hanmail.net</option>
              <option>daum.net</option>
              <option>nate.com</option>
              <option>hotmail.com</option>
              <option>gmail.com</option>
              <option>icloud.com</option>
            </select>
            <div className={css.email_agree_box}>
              <input type="checkbox" id="checkbox" />
              <span className={css.email_agree}>
                정보/이벤트 메일 수신에 동의합니다.
              </span>
            </div>
          </div>
          <div className={css.tr_phone}>
            <span className={css.th_phone}>휴대폰번호</span>
            <input
              className={css.phone_input}
              name="phone"
              type="text"
              placeholder="- 없이 입력하세요."
            />
            <div className={css.sms_agree_box}>
              <input type="checkbox" id="checkbox" />
              <span className={css.sms_agree}>
                정보/이벤트 SMS 수신에 동의합니다.
              </span>
            </div>
          </div>
          <div className={css.tr_address_1}>
            <span className={css.th_address}>주소</span>
            <input className={css.address_input} name="email" type="text" />
            <button className={css.search_button}>우편번호 검색</button>
          </div>
          <div className={css.tr_address_2}>
            <input
              className={css.address_input_1}
              name="Address1"
              type="text"
            />
            <input
              className={css.address_input_2}
              name="Address2"
              type="text"
            />
          </div>
        </div>
        <div className={css.divider}>
          <button
            className={`${css.signup_button} ${
              valid ? css.active : css.inactive
            }`}
            disabled={!valid}
            onClick={buttonOnClick}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
