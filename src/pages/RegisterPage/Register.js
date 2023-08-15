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
  const [subSubCategory, setSubSubCategory] = useState(''); // 소분류 추가

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
      <div className="regi-title">
        <h1>Let Skill it에 오신 것을 환영합니다!</h1>
      </div>
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
              <option value="programming">개발</option>
              <option value="design">디자인</option>
              <option value="art">예술</option>
              <option value="lessons">레슨</option>
              <option value="home">홈/리빙</option>
              <option value="event">이벤트</option>
              <option value="cook">요리</option>
              <option value="bussiness">비즈니스</option>
              <option value="counseling">상담</option>
              <option value="parttime">알바</option>
            </select>
          </div>
          {MainCategory === 'programming' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (개발) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="frontend">프론트 엔트 개발</option>
                <option value="backend">백엔드 개발</option>
                <option value="mobile">모바일 앱 개발</option>
                <option value="game">게임 개발</option>
                <option value="database">데이터버이스 관리 및 개발</option>
              </select>
            </div>
          )}
          {MainCategory === 'design' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (디자인) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="branding">로고 및 브랜딩 디자인</option>
                <option value="uiux-design">UI/UX 디자인</option>
                <option value="poster">포스터 및 배너 디자인</option>
                <option value="presentation">프레젠테이션 디자인</option>
                <option value="interior">인테리어 디자인</option>
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
                <option value="western-painting">서양화</option>
                <option value="eastern-painting">동양화</option>
                <option value="sculpture">조각 및 조형</option>
                <option value="music-performance-composition">
                  음악연주 및 작곡
                </option>
                <option value="photography-editing">사진촬영 및 편집</option>
              </select>
            </div>
          )}
          {MainCategory === 'lessons' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (레슨) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="language-learning">외국어 학습</option>
                <option value="musical-instrument">악기 연주 강좌</option>
                <option value="dance">댄스 강좌</option>
                <option value="math">수학강좌</option>
                <option value="golf">골프강좌</option>
              </select>
            </div>
          )}
          {MainCategory === 'home' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (홈/리빙) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="home-staging-interior-consulting">
                  홈 스테이징 및 인테리어 컨설팅
                </option>
                <option value="health-wellness-coaching">
                  건강 및 웰빙코치
                </option>
                <option value="diy-furniture-making">DIY 가구 제작</option>
                <option value="indoor-gardening">실내정원 가꾸기</option>
                <option value="home-cleaning-organization">
                  집청소 및 정리
                </option>
              </select>
            </div>
          )}
          {MainCategory === 'event' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (이벤트) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="wedding-planning">웨딩 플래닝</option>
                <option value="corporate-event-planning">
                  기업 디자인 기획
                </option>
                <option value="festival-performance-organizing">
                  축제 및 공연 주최
                </option>
                <option value="birthday-party-planning">생일 파티 계획</option>
                <option value="seminar-workshop-organizing">
                  세미나 및 워크샵 주최
                </option>
              </select>
            </div>
          )}
          {MainCategory === 'cook' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (요리) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="korean-dish">한식</option>
                <option value="western-dish">양식</option>
                <option value="chinese-dish">중식</option>
                <option value="japanese-dish">일식</option>
                <option value="vietnam-dish">베트남</option>
              </select>
            </div>
          )}
          {MainCategory === 'business' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (비지니스) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="startup-consulting">창업 컨설팅</option>
                <option value="digital-marketing-strategy">
                  디지털 마케팅 전략
                </option>
                <option value="finance-investment-advisory">
                  금융 및 투자 상담
                </option>
                <option value="franchise-business-startup">
                  프랜차이즈 사업 시작
                </option>
                <option value="online-sales-ecommerce">
                  온라인 판매 및 이커머스
                </option>
              </select>
            </div>
          )}
          {MainCategory === 'counseling' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (상담) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="psychological-counseling-therapy">
                  심리 상담 및 치료
                </option>
                <option value="family-couple-counseling">
                  가족 및 부부 상담
                </option>
                <option value="career-vocational-counseling">
                  직업 및 진로 상담
                </option>
                <option value="trauma-healing-coping">
                  트라우마 치유 및 대처
                </option>
                <option value="intlife-coaching-goal-settingerior">
                  인생 코칭 및 목표 설정
                </option>
              </select>
            </div>
          )}
          {MainCategory === 'parttime' && (
            <div className="register-subcategory-input">
              <label>
                중분류 (알바) <br />
              </label>
              <select value={SubCategory} onChange={onSubCategoryHandler}>
                <option value="">중분류를 선택하세요</option>
                <option value="retail-service-parttime">
                  매장 영업 및 서비스 알바
                </option>
                <option value="online-platform-freelancer">
                  온라인 플랫폼 프리랜서
                </option>
                <option value="delivery-food-rider">
                  딜리버리 및 푸드 라이더
                </option>
                <option value="home-helper-babysitter">
                  가정 도우미 및 베이비시터
                </option>
                <option value="event-staff-assistant">
                  이벤트 스태프 및 보조
                </option>
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
