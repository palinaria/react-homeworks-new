import React from "react";
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <div className="login_title">Log in</div>
            <div className="login_content">
                <div className="user_name">
                    <label>
                        User name:&nbsp;
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                        />
                    </label>
                </div>
                <div className="password">
                    <label>
                        Password:&nbsp;
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </label>
                </div>
            </div>
        </div>
    )

};

export default Login;









