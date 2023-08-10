import "../Scss/Header.scss";
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import { ImMenu } from "react-icons/im";

const Header = () => {
    
    const [ menuisOpen , setMenuisOpen ] = useState(false); 

    const toggleMenu = () => {
        setMenuisOpen(!menuisOpen);
    }
   
    return (
        <div>
            
            <div className="menu-bar">
                <Link to='/'>
                    <img className="LogoImage" src="/img/Letskillit_logo.png" />
                </Link>
                <button className="menu-sidebar-button" onClick={toggleMenu}><ImMenu /></button>
                <Link to='/search-talent'><p>맞춤재능 찾기</p></Link>
                <Link to="/community"><p>커뮤니티</p></Link>
                <Link to="/mypage"><BsFillPersonFill /></Link>
                <Link to="/login"><p>로그인</p></Link>
                <Link to="/register"><p>회원가입</p></Link>
            </div>
            {menuisOpen && (
                <div>
                <div className="sidebar-overlay" onClick={toggleMenu}></div>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h2>메뉴</h2><button className="sidebar-out" onClick={toggleMenu}>X</button>
                    </div>
                    <hr />
                    <div className="sidebar-body">
                        <Link to="/login" className="sidebar-menu-login"  onClick={toggleMenu}>로그인</Link>
                        <Link to="/register" className="sidebar-menu-register"  onClick={toggleMenu} >회원가입</Link>
                        <Link to="/mypage" className="sidebar-menu-myinfor"  onClick={toggleMenu}><BsFillPersonFill /></Link>
                        <hr />
                        <Link to='/search-talent' className="sidebar-menu-search-talent"  onClick={toggleMenu}>맞춤재능 찾기</Link>
                        <Link to="/community" className="sidebar-menu-community"  onClick={toggleMenu}>커뮤니티</Link>
                        
                    </div>
                </div>
            </div>
            )}

        </div>
        
    )
}


export default Header;