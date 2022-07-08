import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../config';
import css from './Signup.module.scss';

const point = 'https://img.icons8.com/emoji/344/red-square-emoji.png';

function Signup() {
  const sendUserSignUp = () => {
    fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name: id,
        password: password,
        name: name,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === '회원가입을 축하드립니다.') {
          alert('회원가입을 축하드립니다.');
          gotologin();
        } else {
          alert(res.message);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const [signupValue, setSignupValue] = useState({
    id: '',
    password: '',
    checkPassword: '',
    name: '',
  });
  const { id, password, checkPassword, name } = signupValue;
  const [length, setLength] = useState();
  const [invalidId, setInvalidId] = useState(false);
  const [invalidPw, setInvalidPw] = useState(false);
  const [invalidCheckPw, setInvalidCheckPw] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const navigate = useNavigate();
  const gotologin = () => {
    navigate('/login');
  };

  const validation = (idText, pwText, checkPwText, nameText) => {
    if (
      idText?.length < 4 ||
      pwText?.length < 7 ||
      pwText !== checkPwText ||
      nameText?.length < 1
    ) {
      return false;
    }
    return true;
  };

  const valid = validation(id, password, checkPassword, name);

  const invalidIdTextTag = useRef('');
  const invalidIdInputTag = useRef('');
  const invalidPwTextTag = useRef('');
  const invalidPwInputTag = useRef('');
  const invalidCheckPwTextTag = useRef('');
  const invalidCheckPwInputTag = useRef('');
  const invalidNameTextTag = useRef('');
  const invalidNameInputTag = useRef('');

  const num = /[0-9]/g; // 입력한 pw에 숫자가 포함되어 있으면 0이상 숫자 전달됨.
  const eng = /[a-z]/gi; // 입력한 pw에 영문이 포함되어 있으면 0이상 숫자 전달됨.
  const spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi; // 입력한 pw에 특수문가거 포함되어 있으면 0이상 숫자 전달됨.

  // 안전한 비밀번호인지 확인
  // isSafe 값이 1 : 안전함(영문,숫자,특수문자 중 2개 이상 들어감. 0 : 안전하지 않음...
  const isSafe =
    (num.test(password) && eng.test(password)) ||
    (num.test(password) && spe.test(password)) ||
    (eng.test(password) && spe.test(password));

  return (
    <div className={css.container}>
      <div className={css.signup_box}>
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
          <div className={css.input_whole_box}>
            <div className={css.input_box}>
              <span className={css.info_text}>
                <img src={point} alt="point" />
                아이디
              </span>
              <input
                ref={invalidIdInputTag}
                className={
                  id?.length >= 4 || id?.length === 0
                    ? css.basic_input
                    : css.red_input
                }
                name="id"
                type="text"
                value={id}
                onChange={e => {
                  setInvalidId(false);
                  setSignupValue({ ...signupValue, id: e.target.value });
                  setLength(e.target.value.length);
                }}
              />
            </div>
            {/* 아이디 comment 부분 입니다. */}
            {invalidId && (
              <div ref={invalidIdTextTag} className={css.black_text}>
                필수항목입니다.
              </div>
            )}
            {id?.length > 0 && id?.length < 4 && (
              <div ref={invalidIdTextTag} className={css.black_text}>
                최소 4 이상 입력해주세요.
              </div>
            )}
            {id?.length >= 4 && (
              <div className={css.green_text}>사용가능한 아이디입니다.</div>
            )}
            <div className={css.input_box}>
              <span className={css.info_text}>
                <img src={point} alt="point" />
                비밀번호
              </span>
              <input
                ref={invalidPwInputTag}
                className={
                  isSafe === true ||
                  password?.length >= 7 ||
                  password?.length === 0
                    ? css.basic_input
                    : css.red_input
                }
                name="password"
                type="password"
                value={password}
                onChange={e => {
                  setInvalidPw(false);
                  setSignupValue({ ...signupValue, password: e.target.value });
                  setLength(e.target.value.length);
                }}
              />
            </div>
            {/* 비번 comment 부분 입니다. */}
            {invalidPw && (
              <div ref={invalidPwTextTag} className={css.black_text}>
                필수항목입니다.
              </div>
            )}
            {password?.length > 0 && password?.length < 7 && (
              <div ref={invalidPwTextTag} className={css.black_text}>
                최소 7 이상 입력해주세요.
              </div>
            )}
            {password?.length > 6 && isSafe !== true && (
              <div className={css.black_text}>
                사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상
                조합하세요.
              </div>
            )}
            {isSafe === true && (
              <div className={css.green_text}>안전한 비밀번호 입니다.</div>
            )}

            <div className={css.input_box}>
              <span className={css.info_text}>
                <img src={point} alt="point" />
                비밀번호 확인
              </span>
              <input
                ref={invalidCheckPwInputTag}
                className={
                  checkPassword?.length === 0 || password === checkPassword
                    ? css.basic_input
                    : css.red_input
                }
                name="passwordCheck"
                type="password"
                value={checkPassword}
                onChange={e => {
                  setInvalidCheckPw(false);
                  setSignupValue({
                    ...signupValue,
                    checkPassword: e.target.value,
                  });
                  setLength(e.target.value.length);
                }}
              />
            </div>
            {/* 비번확인 comment 부분 입니다. */}
            {invalidCheckPw && (
              <div ref={invalidCheckPwTextTag} className={css.black_text}>
                필수항목입니다.
              </div>
            )}
            {password === checkPassword && (
              <div ref={invalidCheckPwTextTag} className={css.display_none} />
            )}
            {checkPassword?.length > 0 && password !== checkPassword && (
              <div className={css.black_text}>비밀번호가 다릅니다.</div>
            )}
            <div className={css.input_box}>
              <span className={css.info_text}>
                <img src={point} alt="point" />
                이름
              </span>
              <input
                ref={invalidNameInputTag}
                className={
                  name?.length === 0 || name?.length > 1
                    ? css.basic_input
                    : css.red_input
                }
                name="name"
                type="text"
                value={name}
                onChange={e => {
                  setInvalidName(false);
                  setSignupValue({ ...signupValue, name: e.target.value });
                  setLength(e.target.value.length);
                }}
              />
            </div>
            {/* 이름확인 comment 부분 입니다. */}
            {invalidName && (
              <div ref={invalidNameTextTag} className={css.black_text}>
                필수항목입니다.
              </div>
            )}
            {name?.length >= 1 && (
              <div ref={invalidNameTextTag} className={css.display_none} />
            )}

            <div className={css.nick_name_input_box}>
              <span className={css.nick_name_text}>닉네임</span>
              <input className={css.basic_input} name="nickName" type="text" />
            </div>
            <div className={css.email_input_box}>
              <span className={css.email_text}>이메일</span>
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
                <span>정보/이벤트 메일 수신에 동의합니다.</span>
              </div>
            </div>
            <div className={css.phone_input_box}>
              <span className={css.phone_text}>휴대폰번호</span>
              <input
                className={css.basic_input}
                name="phone"
                type="text"
                placeholder="- 없이 입력하세요."
              />
              <div className={css.sms_agree_box}>
                <input type="checkbox" id="checkbox" />
                <span>정보/이벤트 SMS 수신에 동의합니다.</span>
              </div>
            </div>
            <div className={css.address_input_box_1}>
              <span className={css.address_text}>주소</span>
              <input className={css.address_input} name="email" type="text" />
              <button>우편번호 검색</button>
            </div>
            <div className={css.address_input_box_2}>
              <input className={css.basic_input} name="Address1" type="text" />
              <input
                className={css.address_input_2}
                name="Address2"
                type="text"
              />
            </div>
          </div>
          <div className={css.divider}>
            <button
              className={css.signup_button}
              onClick={e => {
                e.preventDefault();
                if (valid) {
                  sendUserSignUp();
                }
                if (id.length < 4) {
                  setInvalidId(true);
                  invalidIdInputTag.current.className = css.red_input;
                }
                if (password.length < 7) {
                  setInvalidPw(true);
                  invalidPwInputTag.current.className = css.red_input;
                }
                if (checkPassword.length === 0) {
                  setInvalidCheckPw(true);

                  invalidCheckPwInputTag.current.className = css.red_input;
                }
                if (name.length < 1) {
                  setInvalidName(true);
                  invalidNameInputTag.current.className = css.red_input;
                }
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
