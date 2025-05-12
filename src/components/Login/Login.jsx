import React from "react";
import "./Login.css"
import Input from "/src/components/Input/Input.jsx"

const Login = () => {
    return (
        <div className="login">
            <div className="login_title">Log in</div>
            <div className="login_content">
                <div className="user_name">
                    <label>
                        User name &nbsp;
                        <Input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            size="medium"
                        />
                    </label>
                </div>
                <div className="password">
                    <label>
                        Password &nbsp;
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            size="medium"
                        />
                    </label>
                </div>
            </div>
        </div>
    )

};

export default Login;









