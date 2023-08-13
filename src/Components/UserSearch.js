import React from 'react';
import '../Scss/UserSearch.scss';
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const UserSearch = () => {
    
    const userDummy = [
        {
        img : '',
        nickname: 'Hyunsang',
        giveskill: 'JavaScript',
        takeskill: 'Python',
        age: 24,
        address: '경기도 고양시 덕양구 토당로 32번길 20 그린빌 아파트 101동 405호',
        tell: '집에가고싶어요',
        },

        {
        img : '',
        nickname: 'joyoungmoo',
        giveskill: 'Java',
        takeskill: 'money',
        age: 24,
        address: '천호동',
        tell: '아무것도 하기싫어요',
        },
    ];
    
    return (
        <div className='total-main-user-introduce-wrapper'>    
               
            <h2 className='title'><BsFillArrowThroughHeartFill className='title-icon' />사람 찾아요!</h2>
            <div className='user-talent-search-link'><Link to='/search-talent'><p>더보기<IoArrowForwardSharp /></p></Link></div>
            <div className='main-user-introduce-wrapper'>
                {userDummy.map((user, index) => (
                    <div key={index} className='user-card'>
                        <div className='user-card-header'>
                            <div className='user-card-header-photo' />
                            <p>닉네임: {user.nickname}</p>
                        </div>
                        <div className='user-card-body'>
                        <p>가르칠 재능: {user.giveskill}</p>
                        <p>배우고싶은 재능: {user.takeskill}</p>
                        <p>나이: {user.age}</p>
                        <p>주소: {user.address}</p>
                        </div>
                        <div className='user-card-footer'>
                        <p>
                        하고싶은말: {user.tell}
                        </p>
                        </div>
                        
                    </div>
                    ))
                }
            </div>   
        </div>
      );
    };
    


export default UserSearch;