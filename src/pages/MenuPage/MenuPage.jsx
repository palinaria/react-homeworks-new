import React from 'react';
import Main from '/src/components/Main/Main.jsx'




const MenuPage = ({ onAddToCart, totalQuantity }) => {
    return  <main>
        <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />
    </main>

};

export default MenuPage;
