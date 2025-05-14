import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Input from "/src/components/Input/Input.jsx"
import Button from "../Button/Button.jsx";
import { auth } from "/src/firebase/firebase.js";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        try {

            await signInWithEmailAndPassword(auth, email, password);
            alert("Welcome back!");
            navigate("/");
        } catch (loginError) {
            if (loginError.code === "auth/user-not-found") {

                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                    alert("User registered and logged in!");
                    navigate("/");
                } catch (registerError) {
                    setError(registerError.message);
                }
            } else if (loginError.code === "auth/wrong-password") {
                alert("Wrong password.");
            } else {
                setError(loginError.message);
            }
        }
    };

    const handleCancel = () => {
        setEmail("");
        setPassword("");
        setError("");
    };


    return (
        <div className="login">
            <div className="login_title">Log in</div>
            <form className="login_content" onSubmit={handleSubmit}>
                <div className="user_name">
                    <label>
                        <span>Email</span>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            size="medium"
                            onChange={(e) => setEmail(e.target.value)}
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
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="login_button_container">
                    <Button
                        type="submit"
                        variant={isFormValid ? "btn__primary" : "btn__secondary"}
                        disabled={!isFormValid}
                    >
                        Submit
                    </Button>
                    <Button type="button" variant="btn__secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};



export default Login;









