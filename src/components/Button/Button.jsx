import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    render() {
        const { children, type = "btn__primary" } = this.props;

        return (
            <button className={`btn ${type}`}>{children}</button>
        );
    }
}

export default Button;
