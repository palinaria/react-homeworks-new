import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import './App.css';

import MenuPage from "./pages/MenuPage/MenuPage.jsx"
import HomeMainPage from "./pages/HomeMainPage/HomeMainPage.jsx"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { auth } from "/src/firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";



const App = () => {
    const [cartItems, setCartItems] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleAddToCart = (product) => {
        const productId = product.id;
        const productQuantity = Number(product.quantity);

        setCartItems(prevItems => {
            const updatedItems = { ...prevItems };
            if (updatedItems[productId]) {
                updatedItems[productId] = {
                    ...updatedItems[productId],
                    quantity: updatedItems[productId].quantity + productQuantity
                };
            } else {
                updatedItems[productId] = {
                    ...product,
                    quantity: productQuantity
                };
            }
            return updatedItems;
        });

        setTotalQuantity(prevQuantity => prevQuantity + productQuantity);
    };

    return (
        <Router>
            <Header totalQuantity={totalQuantity} />
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage /> : <Navigate to="/login" />} />
                    <Route path="/menu" element={user ? <MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;