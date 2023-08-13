import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.scss";


const WritePost = (props) => {
    const [boardType, setBoardType] = useState("자유게시판");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const navigate = useNavigate();

    const handleBoardTypeChange = (event) => {
        setBoardType(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
        id: Date.now(), // 임시로 현재 시간을 ID로 사용
        author: "작성자", // 작성자 정보를 적절하게 설정
        boardType,
        title,
        content,
    };
   
    setTitle(""); // 제목 초기화
    setContent(""); // 내용 초기화

    navigate("/community");
    // 나머지 코드
};

    return (
        <div className="main-components-container">
            <div className="writepost-wrapper">
                <div className="main-writepost-wrapper-header">
                    <h2>글 작성 하기</h2>
                    <hr />
                </div>
                <form className="main-writepost-wrapper-body" onSubmit={handleSubmit}>
                    <div className="main-writepost-wrapper-body-type">
                        <label htmlFor="boardType">게시판 유형:</label>
                        <select id="boardType" value={boardType} onChange={handleBoardTypeChange}>
                            <option value="자유게시판">자유게시판</option>
                            <option value="구해요게시판">구해요게시판</option>
                            <option value="원해요게시판">원해요게시판</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="title">제목:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">세부내용:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                        />
                    </div>
                    <button type="submit">글 작성 완료</button>
                </form>
            </div>
        </div>
    );
};

export default WritePost;