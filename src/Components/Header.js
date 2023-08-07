import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            
            <div className="menu-bar">
                <Link to='/'>
                    <img className="LogoImage" src="/img/Letskillit_logo.png" />
                </Link>
                <Link to='/search-talent'><p>맞춤재능 찾기</p></Link>
                <Link to="/community"><p>커뮤니티</p></Link>
                <Link to="/login"><p>로그인</p></Link>
                <Link to="/register"><p>회원가입</p></Link>
            </div>
        </div>
        
    )
}


export default Header;