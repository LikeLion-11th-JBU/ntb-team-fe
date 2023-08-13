import React from "react";
import { Link } from 'react-router-dom';
import "./SearchTalent.scss";
import { IoArrowForwardSharp } from "react-icons/io5";
const SearchTalent = () => {

    const userDummy = [
        {
        nickname: 'Hyunsang',
        giveskill: 'JavaScript',
        takeskill: 'Python',
        address: '능곡',
        tell: '참깨방위에 순쇠고기 패티2장',
        },
        {
        nickname: 'joyoungmoo',
        giveskill: 'Java',
        takeskill: 'money',
        address: '천호동',
        tell: '특별한소스 양상추 치즈 피클',
        },
        {
        nickname: '성연준',
        giveskill: '자바',
        takeskill: '주먹',
        address: '원당',
        tell: '양파 까지 빰빰빠라라빰',
        },
        {
        nickname: '백승일',
        giveskill: '부시기',
        takeskill: '던지기',
        address: '김포',
        tell: '놀러 가고 싶어요',
        },
        {
        nickname: '우제혁',
        giveskill: '보안',
        takeskill: '개발',
        address: '성수동',
        tell: '아무것도 하기싫어요',
        },
        {
        nickname: '이종엽',
        giveskill: '보험',
        takeskill: '몰라',
        address: '연희동',
        tell: '너가뭔데 이자식아.',
        },
    ];

    return (
        <div className="main-components-container">
            <div className="main-searchtalent-wrapper">
                <div className="main-searchtalent-wrapper-header">
                    <h2 className="main-searchtalent-title">재능인 찾기</h2>
                    <select>
                        <option>GIVE재능</option>
                        <option>Take재능</option>
                        <option>닉네임</option>
                    </select>
                    <input
                    className="main-searchtalent-search"
                    placeholder="검색"
                    type="text"
                    >
                    </input> 
                    <button>찾기</button>
                </div>
                <hr />
                <div className="main-searchtalent-wrapper-body">
                    <div className="category-sidebar-container">
                        <h3>카테고리 분류</h3>
                        <hr />
                        <li>IT</li>
                        <li>음악</li>
                        <li>정비</li>
                        <li>카테고리4</li>
                        <li>카테고리5</li>
                        <li>카테고리6</li>
                        <li>카테고리7</li>
                        <li>카테고리8</li>
                        <li>카테고리9</li>
                        <li>카테고리10</li>
                    </div>
                    <div className="main-person-container">
                        {userDummy.map((user, index) => (
                        <div key={index} className='main-searchtalent-user-card'>
                                <div className='searchtalent-user-card-header'>
                                    <div className='user-card-header-photo' />
                                    <p>닉네임: {user.nickname}</p>
                                    <Link to='/mypage'>자세히보기<IoArrowForwardSharp /></Link>
                                </div>
                            <div className='searchtalent-user-card-body'>
                                <p>가르칠 재능: {user.giveskill}</p>
                                <p>배우고싶은 재능: {user.takeskill}</p>
                                <p>주소: {user.address}</p>
                            </div>
                            <div className='searchtalent-user-card-footer'>
                                <p> 하고싶은말: {user.tell}</p>
                            </div>
                        
                        </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTalent;