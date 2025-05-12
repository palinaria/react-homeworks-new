import React from 'react';
import "./Input.css"

const Input = React.forwardRef((props, ref) => {
    const inputClass = `custom-input amount--${props.size || "medium"}${props.className ? " " + props.className : ""}`;


    return (
        <input
            ref={ref}
            className={inputClass}
            {...props}
        />
    );
});

export default Input;
