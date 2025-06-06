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

import ProtectedRoutes from "./routes/ProtectedRoutes";


const App: FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/logout" element={<LogoutPage />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<HomeMainPage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/company"  />
                    </Route>

                </Routes>
            </main>
            <Footer/>
        </Router>
    );
};

export default App;