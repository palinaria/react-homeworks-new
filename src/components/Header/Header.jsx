import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import logo from '../../assets/logo_svg.svg';
import cart from "../../assets/cart_svg.svg";


const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/company', label: 'Company' },  // Замените на правильный маршрут, если есть
    { to: '/login', label: 'Login' },
];

const Header = ({ totalQuantity }) => {
    return (
        <header className="header font">
            <div className="extra_element"></div>
            <div className="header_left">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_right">
                <nav className="nav">
                    {links.map(link => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="cart">
                    <img src={cart} alt="cart" className="cart__icon" />
                    <span className="cart__counter">{totalQuantity}</span>
                </div>
            </div>
        </header>
    );
};
export default Header;