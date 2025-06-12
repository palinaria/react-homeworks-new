import {FC} from 'react';
import Main from '../../../src/components/Main/Main'
import {CartProduct} from "../../interfaces/menuItem";


interface MenuPageProps {
    onAddToCart: (item:CartProduct)=> void;
    totalQuantity: number;
}

const MenuPage:FC<MenuPageProps> = ({ onAddToCart, totalQuantity }) => {
    return (
        <main>
            <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />
        </main>
    );
};

export default MenuPage;