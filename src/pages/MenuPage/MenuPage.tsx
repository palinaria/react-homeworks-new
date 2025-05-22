import React from 'react';
import Main from '../../../src/components/Main/Main'


interface MenuPageProps {
    onAddToCart: (item: { id: string; meal: string; price: number; instructions: string; img: string; category: string })=> void;
    totalQuantity: number;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart, totalQuantity }) => {
    return (
        <main>
            <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />
        </main>
    );
};

export default MenuPage;