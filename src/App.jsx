import React, {useState} from "react";
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from "./components/Footer/Footer.jsx";

import './App.css';

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
        <>
            <Header totalQuantity={totalQuantity} />
            <Main onAddToCart={handleAddToCart} />
            <Footer />
        </>
    );
};

export default App;


