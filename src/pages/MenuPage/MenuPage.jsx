import React from 'react';
import Main from '/src/components/Main/Main.jsx'
import HomeMain from "../../components/HomeMain/HomeMain.jsx";



const MenuPage = ({ onAddToCart, totalQuantity }) => {
    return  <main>
        <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />;
    </main>

};

export default MenuPage;
