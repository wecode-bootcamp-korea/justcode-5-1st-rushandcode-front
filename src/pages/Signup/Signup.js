import React from 'react';

import css from './Signup.module.scss';

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const gotologin = () => {
    navigate('/login');
  };

  const sendUserSignUp = () => {
    fetch('http://localhost:10010/signup', {
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
        alert(res.message);
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
              id="id_input"
              className={css.id_input}
              name="id"
              type="text"
              value={id}
              onChange={e => {
                setId(e.target.value);
                const length = e.target.value.length;
                const el = document.getElementById('id_comment');
                const el2 = document.getElementById('id_input');
                if (length === 0) {
                  el.className = `${css.display_none}`;
                  el2.className = `${css.id_input}`;
                } else if (length < 4) {
                  el.textContent = '최소 4 이상 입력해주세요.';
                  el.className = `${css.id_invalid}`;
                  el2.className = `${css.red_input}`;
                } else {
                  el.textContent = '사용가능한 아이디입니다.';
                  el.className = `${css.id_valid}`;
                  el2.className = `${css.id_input}`;
                }
              }}
            />
          </div>
          {/* 아이디 comment 부분 입니다. */}
          <div id="id_comment" />

          <div className={css.tr_pw}>
            <span className={css.th_pw}>
              <img src={point} alt="point" />
              비밀번호
            </span>
            <input
              id="pw_input"
              className={`${css.pw_input}`}
              name="password"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);

                const num = e.target.value.search(/[0-9]/g); // 입력한 pw에 숫자가 포함되어 있으면 0이상 숫자 전달됨.
                const eng = e.target.value.search(/[a-z]/gi); // 입력한 pw에 영문이 포함되어 있으면 0이상 숫자 전달됨.
                const spe = e.target.value.search(
                  /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi
                ); // 입력한 pw에 특수문가거 포함되어 있으면 0이상 숫자 전달됨.

                const length = e.target.value.length;
                const el = document.getElementById('pw_comment');
                const el2 = document.getElementById('pw_input');
                // 안전한 비밀번호인지 확인
                // isSafe 값이 1 : 안전함(영문,숫자,특수문자 중 2개 이상 들어감. 0 : 안전하지 않음.
                const isSafe =
                  (num >= 0 && eng >= 0) ||
                  (num >= 0 && spe >= 0) ||
                  (eng >= 0 && spe >= 0);

                if (length === 0) {
                  el.className = `${css.display_none}`;
                  el2.className = `${css.pw_input}`;
                } else if (length < 7) {
                  el.textContent = '최소 7 이상 입력해주세요.';
                  el.className = `${css.password_invalid}`;
                  el2.className = `${css.red_border}`;
                } else {
                  if (isSafe === true) {
                    el.textContent = '안전한 비밀번호 입니다.';
                    el.className = `${css.password_valid}`;
                    el2.className = `${css.pw_input}`;
                  } else {
                    el.textContent =
                      '사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요.';
                    el.className = `${css.password_invalid}`;
                    el2.className = `${css.red_border}`;
                  }
                }
              }}
            />
          </div>
          {/* 비번 comment 부분 입니다. */}
          <div id="pw_comment" />

          <div className={css.tr_pw_check}>
            <span className={css.th_pw_check}>
              <img src={point} alt="point" />
              비밀번호 확인
            </span>
            <input
              id="pw_check_input"
              className={`${css.pw_check_input} ${
                checkPassword.length > 0 &&
                password !== checkPassword &&
                css.red_input
              }`}
              name="passwordCheck"
              type="password"
              value={checkPassword}
              onChange={e => {
                setCheckPassword(e.target.value);
                const length = e.target.value.length;
                const el = document.getElementById('pw_check_comment');

                if (length === 0) {
                  el.className = `${css.display_none}`;
                } else if (password !== e.target.value) {
                  el.textContent = '비밀번호가 다릅니다.';
                  el.className = `${css.password_invalid}`;
                } else {
                  el.className = `${css.display_none}`;
                }
              }}
            />
          </div>
          {/* 비번확인 comment 부분 입니다. */}
          <div id="pw_check_comment" />
          <div className={css.tr_name}>
            <span className={css.th_name}>
              <img src={point} alt="point" />
              이름
            </span>
            <input
              id="name_input"
              className={css.name_input}
              name="name"
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
                const el = document.getElementById('name_comment');
                const el2 = document.getElementById('name_input');

                el.className = `${css.display_none}`;
                el2.className = `${css.name_input}`;
              }}
            />
          </div>
          {/* 이름 comment 부분 입니다. */}
          <div id="name_comment" />

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
            className={css.signup_button}
            onClick={e => {
              e.preventDefault();
              if (valid) {
                sendUserSignUp();
              } else {
                if (id.length < 4) {
                  const el = document.getElementById('id_comment');
                  el.className = `${css.red_invalid}`;
                  el.textContent = '필수항목입니다.';
                  const el2 = document.getElementById('id_input');
                  el2.className = `${css.red_border}`;
                }
                if (password.length < 7) {
                  const el = document.getElementById('pw_comment');
                  el.className = `${css.red_invalid}`;
                  el.textContent = '필수항목입니다.';
                  const el2 = document.getElementById('pw_input');
                  el2.className = `${css.red_border}`;
                }
                if (checkPassword.length === 0) {
                  const el = document.getElementById('pw_check_comment');
                  el.className = `${css.red_invalid}`;
                  el.textContent = '필수항목입니다.';
                  const el2 = document.getElementById('pw_check_input');
                  el2.className = `${css.red_border}`;
                }
                if (name.length === 0) {
                  const el = document.getElementById('name_comment');
                  el.className = `${css.red_invalid}`;
                  el.textContent = '필수항목입니다.';
                  const el2 = document.getElementById('name_input');
                  el2.className = `${css.red_border}`;
                }
              }
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
