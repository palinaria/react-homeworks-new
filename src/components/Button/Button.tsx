import React from "react";
import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}


const Button : React.FC<ButtonProps> = ({ children, variant = "btn__primary", type = "button", onClick ,disabled}) => {
    return (
        <button className={`btn ${variant}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};


export default Button;
