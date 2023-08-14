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
    

  

  useEffect(() => {
    // useEffect 안에서 Axios로 데이터를 가져옴
    axios.get('http://localhost:8080/main/login')
      .then(response => {
       
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행


    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:8080/main/user/detail");
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     getData();
    // }, []);
       

    const backReturnPage = () => {
        navigate("/");
    }

    return (
        <div className="main-components-container ">
            <MainBodyWrapper>
                <div className="main-mypage-wrapper">
                    <img className="background-picture" src='/img/background1.jpg' alt='배경1'/>
                    <p>이름: 이름</p>
                    <p>하고싶은말: 말말</p>
                    <p>이메일: 이메일아이디</p>
                    <p>오픈쳇: 오픈쳇주소</p>
                    <button>회원 탈퇴</button>
                    <button>회원 정보 수정</button>
                    <button onClick={backReturnPage}>뒤로가기</button>
                </div>
            </MainBodyWrapper>
        </div>
    )
}

export default MyPage;