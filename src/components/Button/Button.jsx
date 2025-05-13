import React from "react";
import "./Button.css";


const Button = ({ children, variant = "btn__primary", type = "button", onClick }) => {
    return (
        <button className={`btn ${variant}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;
