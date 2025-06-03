import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Button from "../Button/Button";
import "./Logout.css";
import {useDispatch} from "react-redux";
import {logout} from "../../Store/authSlice";

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(logout())
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
