import React, { Component } from "react";
import "./Tooltip.css";

class Tooltip extends Component {
    render() {
        const { text, children, component: Component = "span" } = this.props;
        return (
            <Component className="tooltip">
                {children}
                <span className="tooltipText">{text}</span>
            </Component>
        );
    }
}

export default Tooltip;
