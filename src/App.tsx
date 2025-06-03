import  {FC,useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import MenuPage from "./pages/MenuPage/MenuPage"
import HomeMainPage from "./pages/HomeMainPage/HomeMainPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";

import { auth } from "./firebase/firebase";
import { onAuthStateChanged ,User} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Store/authSlice";
import { RootState, AppDispatch } from "./Store/Store";

import {CartProduct} from "./interfaces/menuItem";



type CartItems = {
    [productId: string]: CartProduct;
};

const App:FC = () => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                dispatch(login({ email: user.email || "" }));
            } else {
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const handleAddToCart = (product: CartProduct) => {
        const productId = product.id;
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
                    meal: product.meal,
                    price: product.price,
                    quantity: productQuantity,
                    instructions: product.instructions,
                    img: product.img,
                };
            }
            return updatedItems;
        });

        setTotalQuantity((prevQuantity) => prevQuantity + productQuantity);
    };

    return (
        <Router>
            <Header totalQuantity={totalQuantity} user={user}/>
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage /> : <Navigate to="/login" />} />
                    <Route path="/menu" element={user ? <MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} /> : <Navigate to="/login" />} />


                    <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />

                    <Route path="/logout" element={<LogoutPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;