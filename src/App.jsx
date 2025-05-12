import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import MenuPage from "./pages/MenuPage/MenuPage.jsx"
import HomeMainPage from "./pages/HomeMainPage/HomeMainPage.jsx"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";





const App = () => {
    const [cartItems, setCartItems] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

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
                    <Route path="/" element={<HomeMainPage />} />
                    <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} />} />
                    <Route path = "/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;


