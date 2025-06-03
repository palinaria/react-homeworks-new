import {FC} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import MenuPage from "./pages/MenuPage/MenuPage"
import HomeMainPage from "./pages/HomeMainPage/HomeMainPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";

import {useSelector} from "react-redux";
import {RootState} from "./Store/Store";


const App: FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage/> : <Navigate to="/login"/>}/>
                    <Route path="/menu" element={user ? <MenuPage/> : <Navigate to="/login"/>}/>
                    <Route path="/login" element={!user ? <LoginPage/> : <Navigate to="/"/>}/>
                    <Route path="/logout" element={<LogoutPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
};

export default App;