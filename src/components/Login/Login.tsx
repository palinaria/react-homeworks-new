import  {useState,useEffect, FC, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Input from "../Input/Input"
import Button from "../Button/Button";
import { auth } from "../../firebase/firebase";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User
} from "firebase/auth";
import {login} from "../../Store/authSlice";
import {useDispatch} from "react-redux";


const Login:FC  = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const validateEmail = (email:string) :boolean => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        return (regex.test(email) && email.length > 5 && email.length <= 25 && email.includes("@"));
    };



    useEffect(() => {
        setIsFormValid(email.trim() !== "" && password.trim() !== "");
        setError("");
    },[email, password]);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            try {
                setIsLoggedIn(!!user);
                dispatch(login({ email: user?.email || "" }));
            } catch (error) {
                console.error("Error:", error);
            }
        });

        return () => unsubscribe();
    }, []);



    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
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
        } catch (loginError: any) {
            if (loginError.code === "auth/wrong-password") {
                alert("Wrong password.");
            } else if (loginError.code === "auth/user-not-found") {
                alert("User not found.");
            } else {
                setError(loginError.message);
            }
        }
    };

    const handleCancel = () :void => {
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
                            inputSize="medium"
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
                            inputSize="medium"
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









