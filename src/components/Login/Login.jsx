import React, { useState } from "react";
import "./Login.css"
import Input from "/src/components/Input/Input.jsx"
import Button from "../Button/Button.jsx";

const Login = () => {
    const[username, setUsername] = useState("");
    const[password,setPassword] = useState("");

    const isFormValid = username.trim() !== "" && password.trim() !== "";

    return (
        <div className="login">
            <div className="login_title">Log in</div>
            <div className="login_content">
                <div className="user_name">
                    <label>
                        <span>User Name</span>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={username}
                            size="medium"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className="password">
                    <label>
                        <span>Password </span>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            size="medium"
                            onChange ={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="login_button_container">
                    <Button type ={isFormValid ? "btn__primary" : "btn__secondary"}>Submit</Button>
                    <Button type="btn__secondary">Cancel</Button>
                </div>

            </div>
        </div>
    )

};

export default Login;









