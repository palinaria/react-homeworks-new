import React from 'react';
import "./Header.css";
import logo from '../../assets/logo_svg.svg';
import cart from "../../assets/cart_svg.svg";

const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Menu' },
    { href: '#', label: 'Company' },
    { href: '#', label: 'Login' },
];


const Header = () => {
    return (
        <header className="header font">
            <div className="header_left">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_right">
                <nav className="nav">
                    {links.map(link =>(
                        <a href ={link.href}>{link.label}</a>
                    ))}
                </nav>
                <div className="cart">
                    <img src={cart} alt="cart" className="cart__icon" />
                    <span className="cart__counter">0</span>
                </div>
            </div>
        </header>
    );
};

export default Header;