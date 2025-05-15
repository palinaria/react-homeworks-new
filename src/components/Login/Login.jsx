import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Input from "/src/components/Input/Input.jsx"
import Button from "../Button/Button.jsx";
import { auth } from "/src/firebase/firebase.js";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        return (regex.test(email) && email.length > 5 && email.length <= 25 && email.includes("@"));
    };



    useEffect(() => {
        setIsFormValid(email.trim() !== "" && password.trim() !== "");
        setError("");
    },[email, password]);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setError("Invalid email: must contain only English letters, '@', and be 6–25 characters.");
            return;
        }




        if (!isFormValid){
            setError(" Please fill in all fields.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (loginError) {
            if (loginError.code === "auth/wrong-password") {
                alert("Wrong password.");
            } else if (loginError.code === "auth/user-not-found") {
                alert("User not found.");
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

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="login">
            <div className="login_title">{isLoggedIn ? "Log out" : "Log in"}</div>

            {isLoggedIn ? (
                <div className="login_button_container">
                    <Button onClick={handleLogout}>Log out</Button>
                </div>
            ) : (
                <form className="login_content" onSubmit={handleSubmit} noValidate>
                    <label className="label">
                        Email
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            size="medium"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="label">
                        Password
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            size="medium"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="login_button_container">
                        <Button type="submit" disabled={!isFormValid}>
                            Submit
                        </Button>
                        <Button
                            type="button"
                            variant="btn__secondary"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};



export default Login;









