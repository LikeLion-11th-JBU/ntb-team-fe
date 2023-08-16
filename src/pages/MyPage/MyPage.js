import React, { useState, useEffect } from "react";
import "./MyPage.scss";
import MainBodyWrapper from "../../Components/MainBodyWrapper";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
const MyPage = () => {

    const [ user, setUser ] = useState(null);
    // const [ nickname, setNickname ] = useState(null);
    // const [ mention, setMention ] = useState(null);
    // const [ email, setEmail ] = useState(null);
    // const [ kakaoOpenChat , setKakaoOpenChat ] = useState(null); 
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    const navigate = useNavigate()
    

    const backReturnPage = () => {
        navigate("/");
    }

    return (
        <div className="main-components-container ">
            <div className="main-mypage-header">
                    <h2>내 정보 보기</h2>
            </div>
                <div className="main-mypage-wrapper-body">
                    <div className="main-mypage-wrapper-nickname">
                        <img className="background-picture" src='/img/background1.jpg' alt='배경1'/>
                        <p>닉네임</p>
                        <span>유현상</span>
                    </div>
                    <div className="main-mypage-wrapper-content"> 
                        <p>하고싶은말</p>
                        <p>저는 유현상입니다!</p>
                        <p>이메일</p>
                        <p>pycandyq@naver.com</p>
                        <p>오픈쳇</p>
                        <p>openchat@jusojuso</p>
                        <p>배우고싶은 재능 <span>IT {'>'} PROGRAMMING</span></p>
                        <p>자바</p>
                        <p>가르치고싶은 재능 <span>예체능 {'>'} 헬스</span> </p>
                        <p>식단조절방법</p>
                        <div className="main-mypage-wrapper-content-button">
                        <button>회원 탈퇴</button>
                        <button>회원 정보 수정</button>
                        <button onClick={backReturnPage}>뒤로가기</button>
                        </div>
                    </div>
                </div>
                
            
        </div>
    )
}

export default MyPage;