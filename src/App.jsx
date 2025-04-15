import React, {useState} from "react";
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from "./components/Footer/Footer.jsx";

import './App.css';


const App = () => {
    const [cartItems, setCartItems] = useState([]);//хранит

   const handleAddToCart = (product) => {
       setCartItems((prevState) => [...prevState, product]); //добавляет продукты
        //прокидывать инфо выше о продуктк
    }

    return (
        <>
            <Header cartItems={cartItems} />
            <Main onAddToCart={handleAddToCart} />
            <Footer/>
        </>
    );
};

export default App;
