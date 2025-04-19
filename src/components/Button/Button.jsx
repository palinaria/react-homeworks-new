import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    render() {
        const { children, type = "btn__primary",onClick } = this.props;

        return (
            <button className={`btn ${type}`} onClick={onClick}>{children}</button>
        );
    }
}

export default Button;
