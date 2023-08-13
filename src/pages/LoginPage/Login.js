// import React, { useState }  from "react";
// import "./Login.scss";   


// const Login = () => {
//     function validateForm(e) {
//         var loginId = document.getElementById("loginId").value;
//         var password = document.getElementById("password").value;
//         e.preventDefault()
//         // 간단한 로그인 유효성 검사 (여기서는 비움 여부만 확인)
//         if (loginId === "" || password === "") {
//             alert("아이디와 비밀번호를 입력해주세요.");
//             return false; // 페이지 이동 중단
//         }
//     }

//     return(
//         <div className="main-components-container ">
//             <form action="http://localhost8080/main/login" method="post" onsubmit="return validateForm()">
//                 <input type="text" id="loginId" name="loginId" placeholder="아이디" />
//                 <input type="password" id="password" name="password" placeholder="비밀번호" />
        
//                 <button type="submit">로그인</button>
//                 <button class="signup-link" onclick="location.href = '/main/signup'">회원가입</button>

                
//             </form>
            
//         </div>
    
//     );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // 로그인 요청 보내기
    axios.post('http://localhost:8080/main/login', {
      loginId: loginId,
      password: password
    })
    .then(response => {
      // 로그인 성공 시 처리
      const authToken = response.data.authToken; // 예시: 서버에서 받은 토큰

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('authToken', authToken);

      // 로그인이 성공한 후의 동작 수행 (예: 리다이렉트)
    })
    .catch(error => {
      // 로그인 실패 시 처리
      console.error('로그인 오류:', error);
    });
  };

  return (
    <div className='main-components-container'>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;