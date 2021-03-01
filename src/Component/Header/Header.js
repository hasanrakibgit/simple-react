import React from 'react';
import logo from '../../logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className = "header">
            <img src={logo} alt=""/>
            <h1 className= "header-text">BANGLADESH PREMIER LEAGUE PLAYER AUCTION 2021</h1>
        </div>
        
    );
};

export default Header;