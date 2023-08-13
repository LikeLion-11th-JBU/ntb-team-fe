import React, { useState } from 'react';
import './Login.scss';
import Footer from '../../Components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log('UserEmail: ', email);
    console.log('Password: ', password);
    // 여기에 로그인 로직을 추가할 수 있습니다.
  };

  return (
    <div className="main-components-container">
      <h1 className="login-title">로그인</h1>
      <div className="login-frame">
        <form className="login-form" onSubmit={onSubmitHandler}>
          <div className="login-email-input">
            <label>
              이메일 <br />
            </label>
            <input
              type="email"
              value={email}
              placeholder="example@letskillit.com"
              onChange={onEmailHandler} // 오타 수정: onchange -> onChange
            />
          </div>
          <div className="login-password-input">
            <label>
              비밀번호 <br />
            </label>
            <input
              type="password"
              value={password}
              placeholder="비밀번호를 입력하세요."
              onChange={onPasswordHandler} // 오타 수정: onchange -> onChange
            />
          </div>
          <div className="login-submit">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
