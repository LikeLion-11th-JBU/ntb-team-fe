import React, { useState } from 'react';
import './Register.scss';
import Footer from '../../Components/Footer';

const Register = () => {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [MainCategory, setMainCategory] = useState(''); // 대분류 추가
  const [SubCategory, setSubCategory] = useState(''); // 중분류 추가

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onMainCategoryHandler = (event) => {
    // 대분류 선택 핸들러
    setMainCategory(event.currentTarget.value);
    setSubCategory(''); // 대분류 선택 시 중분류 초기화
  };
  const onSubCategoryHandler = (event) => {
    // 중분류 선택 핸들러
    setSubCategory(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
    }

    console.log('Name:', Name);
    console.log('Email:', Email);
    console.log('Password:', Password);
    console.log('Main Category:', MainCategory);
    console.log('Sub Category:', SubCategory);

    // 여기에서 회원가입 로직을 추가할 수 있습니다.
  };

  return (
    <div className="main-components-container">
      <h1 className="regi-title">Let Skill it에 오신 것을 환영합니다!</h1>
      <div className="regi-frame">
        <form className="regi-form" onSubmit={onSubmitHandler}>
          <div className="regi-name-input">
            <label>
              이름 <br />
            </label>
            <input
              type="text"
              value={Name}
              placeholder="이름을 알려주세요!"
              onChange={onNameHandler}
              required
            />
          </div>
          <div className="regi-email-input">
            <label>
              이메일 <br />
            </label>
            <input
              type="email"
              value={Email}
              placeholder="example@letskillit.com"
              onChange={onEmailHandler}
              required
            />
          </div>
          <div className="regi-password-input">
            <label>
              비밀번호 <br />
            </label>
            <input
              type="password"
              value={Password}
              placeholder="비밀번호를 입력하세요."
              onChange={onPasswordHandler}
              required
            />
          </div>
          <div className="password-confirm">
            <label>
              비밀번호 확인 <br />
            </label>
            <input
              type="password"
              value={ConfirmPassword}
              placeholder="비밀번호를 입력하세요."
              onChange={onConfirmPasswordHandler}
              required
            />
          </div>
          <div className="regi-category">
            <label>
              대분류 선택 <br />
            </label>
            <select
              value={MainCategory}
              onChange={onMainCategoryHandler}
              required
            >
              <option value="">대분류를 선택하세요</option>
              <option value="tech">기술</option>
              <option value="art">예술</option>
            </select>
          </div>
          {MainCategory && (
            <div className="regi-subcategory">
              <label>
                중분류 선택 <br />
              </label>
              <select
                value={SubCategory}
                onChange={onSubCategoryHandler}
                required
              >
                <option value="">중분류를 선택하세요</option>
                {MainCategory === 'tech' && (
                  <>
                    <option value="developer">개발자</option>
                    <option value="designer">디자이너</option>
                  </>
                )}
                {MainCategory === 'art' && (
                  <>
                    <option value="painter">화가</option>
                    <option value="musician">음악가</option>
                  </>
                )}
              </select>
            </div>
          )}
          <div className="regi-submit">
            <button className="regi-btn" type="submit">
              회원가입
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
