import React from 'react';
import "./style/tooltip.css";

const Tooltip = ({text,children,component: Component = "span"}) => {
    return (
        <Component className="tooltip">
            {children}
            <span className ="tooltipText">{text}</span>
        </Component>

    );

};


export default Tooltip;



const Main = () => {
    return (
        <p>
            If you want to call us, just <Tooltip text="+375">phone</Tooltip>
        </p>

    );
};