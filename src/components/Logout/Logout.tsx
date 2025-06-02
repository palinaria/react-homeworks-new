import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Button from "../Button/Button";
import "./Logout.css";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="logout">
            <div className="logout_title">Are you sure you want to log out?</div>
            <div className="logout_button_container">
                <Button onClick={handleLogout}>Log out</Button>
            </div>
        </div>
    );
};

export default Logout;
