import React from 'react';
import Main from '/src/components/Main/Main.jsx'



const MenuPage = ({ onAddToCart, totalQuantity }) => {
    return <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />;
};

export default MenuPage;
