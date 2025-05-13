import React, {useEffect, useState} from "react";
import "./Login.css"
import Input from "/src/components/Input/Input.jsx"
import Button from "../Button/Button.jsx";

const Login = () => {
    const[username, setUsername] = useState("");
    const[password,setPassword] = useState("");

    const isFormValid = username.trim() !== "" && password.trim() !== "";

    useEffect(() => {
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([])); // Инициализация пустого списка пользователей
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
            (user) => user.username === username
        );

        if (existingUser) {
            if (existingUser.password === password) {
                localStorage.setItem("currentUser", JSON.stringify(existingUser));
                alert("Welcome back!");
                window.location.href = "/menu";
            } else {
                alert("Wrong password.");
            }
        } else {
            const newUser = { username, password };
            const updatedUsers = [...users, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            alert("User registered and logged in!");
            window.location.href = "/menu";
        }
    };


    return (
        <div className="login">
            <div className="login_title">Log in</div>
            <form className="login_content" onSubmit={handleSubmit}>
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
                        <span>Password</span>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            size="medium"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="login_button_container">
                    <Button
                        type="submit"
                        variant={isFormValid ? "btn__primary" : "btn__secondary"}
                        disabled={!isFormValid}
                    >
                        Submit
                    </Button>
                    <Button type="button" variant="btn__secondary" onClick={handleCancel}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;









