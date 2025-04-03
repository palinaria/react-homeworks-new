import React from 'react';
import "./Tooltip.css";

const Tooltip = ({text,children,component: Component = "span"}) => {
    return (
        <Component className="tooltip">
            {children}
            <span className ="tooltipText">{text}</span>
        </Component>

    );

};

export default Tooltip;


