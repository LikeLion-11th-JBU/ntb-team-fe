import './MainPost.css';
import React from 'react';


const MainPost = ({ posts }) => {

    return (
        <div className='main-wrapper'>
            <h2 className='title'>커뮤니티</h2>
            <div className='main-post-card-wrapper'>
                {posts.map((post) => (
                    <div key={post.id} className='post-card'>
                        <p>ID: {post.id}</p>
                        <p>Author: {post.author}</p>
                        <p>Title: {post.title}</p>
                        <p>Content: {post.content}</p>
                    </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MainPost;