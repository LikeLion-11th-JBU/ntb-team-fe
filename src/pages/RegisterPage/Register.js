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
 const [subSubCategory, setSubSubCategory] = useState('');// 소분류 추가

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
    setMainCategory(event.currentTarget.value);
    setSubCategory('');
    setSubSubCategory('');
  };

  const onSubCategoryHandler = (event) => {
    setSubCategory(event.currentTarget.value);
    setSubSubCategory('');
  };

  const onSubSubCategoryHandler = (event) => {
    setSubSubCategory(event.currentTarget.value);
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
    console.log('Sub-Sub Category: ', subSubCategory);

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
          {MainCategory === 'tech' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (기술) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="programming">컴퓨터 프로그래밍</option>
                <option value="photo-video-editing">사진/영상편집</option>
                <option value="agriculture">농업</option>
              </select>
            </div>
          )}
          {MainCategory === 'art' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (예술) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="music">음악</option>
                <option value="art-painting">미술</option>
                <option value="sports">체육</option>
              </select>
            </div>
          )}
          {SubCategory && (
            <div className="register-subsubcategory-input">
              <label>
                소분류 <br />
              </label>
              <input
                type="text"
                value={subSubCategory}
                placeholder={`상세하게 적어주세요!`}
                onChange={onSubSubCategoryHandler}
              />
            </div>
          )}{' '}
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
