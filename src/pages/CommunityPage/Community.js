import React, { useState } from "react";
import "./Community.scss";
import { Link, useNavigate } from "react-router-dom";
const Community = () => {
    
    const navigate = useNavigate();

    const [posts, setPosts] = useState([
        { boardType: '자유게시판'  , date: '23.07.12', author: '작성자1', title: '제목1 제목1'},
        { boardType: '구해요게시판' , date: '23.06.15', author: '작성자2', title: '제목 제목2'},
    ]);

    const moveToWrite = () => {
        navigate('/writepost');
    }
 
    return (
        <div className="main-components-container">
            <div className="main-community-wrapper">
                <div className="main-community-wrapper-header">
                    <h2 className="main-community-title">커뮤니티</h2>
                    <select>
                        <option>제목</option>
                        <option>내용</option>
                        <option>닉네임</option>
                    </select>
                    <input
                    className="main-community-search"
                    placeholder="검색"
                    type="text"
                    >
                    </input> 
                    <button>찾기</button>
                    <button onClick={moveToWrite}>글 작성</button>
                </div>
                <hr />
                <div className="main-community-wrapper-body">
                    <div className="category-sidebar-container">
                        <h3>카테고리 분류</h3>
                        <hr />
                        <li>자유 커뮤니티</li>
                        <li>재능기부 커뮤니티</li>
                        <li>구해요 커뮤니티</li>
                        <li>원해요 커뮤니티</li>
                    </div>
                    <div className="main-post-container">
                        <div className="main-post-header">
                            <span>게시판 유형</span>
                            <span>제목</span>
                            <span>작성자</span>
                            <span>게시일</span>
                        </div>
                        {posts.map((post) => (
                            <div key={post.id} className='main-post-card'>
                                <p>{post.boardType}</p>
                                <p>{post.title}</p>
                                <p>{post.author}</p>
                                <p>{post.date}</p>
                            </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Community;