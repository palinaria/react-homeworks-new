import React,{ ElementType }  from "react";
import "./Tooltip.css";

interface TooltipProps {
    children?: React.ReactNode;
    component?: ElementType;
    text: string;
}


const Tooltip: React.FC<TooltipProps> = ({ text, children, component: Component = "span" }) => {
    return (
        <Component className="tooltip">
            {children}
            <span className="tooltipText">{text}</span>
        </Component>
    );
};

export default Tooltip;