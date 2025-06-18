import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css";
import logo from '../../assets/logo_svg.svg';
import cart from "../../assets/cart_svg.svg";


import {useSelector} from "react-redux";
import {RootState} from "../../Store/Store";
import {selectTotalQuantity} from "../../Store/cartSlice";

import { useTheme } from '../../contexts/ThemeContext';
import Button from "../Button/Button";

interface Link {
    to: string;
    label: string;
}


const Header: React.FC = () => {

    const { theme, toggleTheme } = useTheme();

    const isLoggedIn = useSelector((state: RootState) => state.auth.user !== null);
    const totalQuantity = useSelector((state: RootState) => selectTotalQuantity(state));


    const links: Link[] = [
        {to: '/', label: 'Home'},
        {to: '/menu', label: 'Menu'},
        {to: '/order', label: 'Order'},
        isLoggedIn ? {to: '/logout', label: 'Logout'} : {to: '/login', label: 'Login'},
    ];

    return (
        <header className="header font">
            <div className="extra_element"></div>
            <div className="header_left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header_right">
                <nav className="nav">
                    {links.map(link => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={({isActive}) => isActive ? 'active-link' : ''}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <Button variant="btn__secondary" onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
                <div className="cart">
                    <img src={cart} alt="cart" className="cart__icon"/>
                    <span className="cart__counter">{totalQuantity}</span>
                </div>
            </div>
        </header>
    );
};
export default Header;