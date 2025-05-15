import React from "react";
import "./Button.css";


const Button = ({ children, variant = "btn__primary", type = "button", onClick ,disabled}) => {
    return (
        <button className={`btn ${variant}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};


export default Button;
