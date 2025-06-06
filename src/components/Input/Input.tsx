import {forwardRef, InputHTMLAttributes} from 'react';
import "./Input.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputSize?: "small" | "medium";
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ inputSize = "medium", className = "", ...rest }, ref) => {
        const inputClass = `custom-input amount--${inputSize} ${className}`;

        return (
            <input
                ref={ref}
                className={inputClass}
                {...rest}
            />
        );
    });

export default Input;
