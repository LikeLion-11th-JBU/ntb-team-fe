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
        age: 24,
        address: '능곡',
        },
        {
        nickname: 'joyoungmoo',
        giveskill: 'Java',
        takeskill: 'money',
        age: 24,
        address: '천호동',
        },
        {
        nickname: '성연준',
        giveskill: '자바',
        takeskill: '주먹',
        age: 26,
        address: '원당',
        },
        {
        nickname: '백승일',
        giveskill: '부시기',
        takeskill: '던지기',
        age: 24,
        address: '김포',
        },
        {
        nickname: '우제혁',
        giveskill: '보안',
        takeskill: '개발',
        age: 24,
        address: '성수동',
        },
        {
        nickname: '이종엽',
        giveskill: '보험',
        takeskill: '몰라',
        age: 24,
        address: '연희동',
        },
    ];

    return (
        <div className="main-components-container">
            <div className="main-searchtalent-wrapper">
                <div className="main-searchtalent-wrapper-header">
                    <h2 className="main-searchtalent-title">재능인 찾기</h2>
                    <hr />
                </div>
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
                                <p>Nickname: {user.nickname}</p>
                                <p>Give Skill: {user.giveskill}</p>
                                <p>Take Skill: {user.takeskill}</p>
                                <p>Age: {user.age}</p>
                                <p>Address: {user.address}</p>
                                <Link to='/mypage'><p>자세히보기<IoArrowForwardSharp /></p></Link>
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