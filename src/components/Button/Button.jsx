import React from "react"
import  "./Button.css"

const Button = ({children,type = "btn__primary"}) => {
    return (
            <button className={`btn ${type}`}>{children}</button> //btn-всегда ,btn__primary-по умолч,или указанный type
    );
};

export default  Button;