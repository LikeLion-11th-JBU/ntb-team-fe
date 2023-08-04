import "./Header.css";
import { Link, Routes, Route } from 'react-router-dom';
import Board from "./Board";
const Header = () => {

    return (
        <div>
            
            <div className="menu-bar">
                <Link to='/'><h3>Let Skill It</h3></Link>
                <Link to='*'><p>맞춤재능 찾기</p></Link>
                <Link to="/board"><p>커뮤니티</p></Link>
                <Link to="/login"><p>로그인</p></Link>
                <Link to="/register"><p>회원가입</p></Link>
            </div>
        </div>
        
    )
}


export default Header;