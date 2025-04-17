import React, {useState} from "react";
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from "./components/Footer/Footer.jsx";

import './App.css';


const App = () => {
    const [cartItems, setCartItems] = useState({});//хранит
    const[totalQuantity, setTotalQuantity] = useState(0);

    const handleAddToCart = (product) => {
        setCartItems((prevState) => {
            if (prevState[product.id]) {
                return {
                    ...prevState,
                    [product.id]: {
                        ...prevState[product.id],
                        quantity: prevState[product.id].quantity + product.quantity
                    }
                } }
            else
                {
                    return {...prevState, [product.id]: product};
                }

        });
        setTotalQuantity((prevState) => prevState + +product.quantity )
    }

    return (
        <>
            <Header totalQuantity ={totalQuantity}/>
            <Main onAddToCart={handleAddToCart}/>
            <Footer/>
        </>
    );
};

export default App;
