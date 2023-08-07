import "./Board.css";
import React, { useState } from 'react';

const Board = () => {

    const initialPosts = [
        { id: 1, author: '작성자1', title: '첫 번째 게시물', content: '첫 번째 게시물 내용입니다.' },
        { id: 2, author: '작성자2', title: '두 번째 게시물', content: '두 번째 게시물 내용입니다.' },
        { id: 3, author: '작성자3', title: '세 번째 게시물', content: '세 번째 게시물 내용입니다.' },
      ];
    
    const [posts, setPosts] = useState(initialPosts);

    const submitHandler = (event) => {
        event.preventDefault()

    } 

    return (

        <>
            <h1>게시판 목록</h1>
            <div className="table-container">
            <table className="board-table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>내용</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.author}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="post-submit">
                <button onClick={submitHandler}>게시</button>
            </div>
            
        </>
    );
}

export default Board;
