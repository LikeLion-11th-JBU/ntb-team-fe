import React, { useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import UserSearch from "../../Components/UserSearch";
import SwiperComponent from "../../Components/Swiper";
import MainPost from "../../Components/MainPost";


const Home = () => {

    const posts = [
        { id: 1, author: '작성자1', title: '첫 번째 게시물', content: '첫 번째 게시물 내용입니다.' },
        { id: 2, author: '작성자2', title: '두 번째 게시물', content: '두 번째 게시물 내용입니다.' },
      ];

    return (
        <div className="main-components-container">
            <SwiperComponent />
            <UserSearch />
            <MainPost posts={posts} />
            
        </div>
        
    ) 
}


export default Home;