import React from 'react';
import '../Scss/UserSearch.scss';
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const UserSearch = () => {
    
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
    ];
    
    return (
        <div className='total-main-user-introduce-wrapper'>    
               
            <h2 className='title'><BsFillArrowThroughHeartFill className='title-icon' />사람 찾아요!</h2>
            <div className='user-talent-search-link'><Link to='/search-talent'><p>더보기<IoArrowForwardSharp /></p></Link></div>
            <div className='main-user-introduce-wrapper'>
                {userDummy.map((user, index) => (
                    <div key={index} className='user-card'>
                        <p>Nickname: {user.nickname}</p>
                        <p>Give Skill: {user.giveskill}</p>
                        <p>Take Skill: {user.takeskill}</p>
                        <p>Age: {user.age}</p>
                        <p>Address: {user.address}</p>
                    </div>
                    ))
                }
            </div>   
        </div>
      );
    };
    


export default UserSearch;