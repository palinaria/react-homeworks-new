import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import './App.css';

import MenuPage from "./pages/MenuPage/MenuPage"
import HomeMainPage from "./pages/HomeMainPage/HomeMainPage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
//import { auth } from "/src/firebase/firebase.js";
import { onAuthStateChanged ,User} from "firebase/auth";

type CartProduct = {
    productId: string;
    title: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
};

type ProductInCart = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
};

type CartItems = {
    [productId: string]: ProductInCart;
};

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleAddToCart = (product: CartProduct) => {
        const productId = product.productId;
        const productQuantity = product.quantity;

        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };

            if (updatedItems[productId]) {
                updatedItems[productId] = {
                    ...updatedItems[productId],
                    quantity: updatedItems[productId].quantity + productQuantity,
                };
            } else {
                updatedItems[productId] = {
                    id: productId,
                    name: product.title,
                    price: product.price,
                    quantity: productQuantity,
                    description: product.description,
                    image: product.image,
                };
            }

            return updatedItems;
        });

        setTotalQuantity((prevQuantity) => prevQuantity + productQuantity);
    };

    return (
        <Router>
            <Header totalQuantity={totalQuantity} />
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage /> : <Navigate to="/login" />} />
                    <Route
                        path="/menu"
                        element={
                            user ? (
                                <MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;