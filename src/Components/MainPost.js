import './MainPost.css';
import React from 'react';
import { BsChatSquareDotsFill } from "react-icons/bs";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const MainPost = ({ posts }) => {
    
    return (
        <div className='main-wrapper'>
            <h2 className='title'><BsChatSquareDotsFill className='title-icon' />커뮤니티</h2>
            <div className='user-post-search-link'><Link to='/Community'><p>더보기<IoArrowForwardSharp /></p></Link></div>
            <div className='main-post-card-wrapper'>
                {posts.map((post) => (
                    <div key={post.id} className='post-card'>
                        <p>ID: {post.id}</p>
                        <p>Author: {post.author}</p>
                        <p>Title: {post.title}</p>2
                        <p>Content: {post.content}</p>
                    </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MainPost;