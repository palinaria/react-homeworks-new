import React, { useState,useEffect } from "react";
import Menu from '../Menu/Menu';
import ProductCard  from '../ProductCard/ProductCard';
import  { CartProduct} from "../../interfaces/menuItem";
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import useFetch from "../../Hooks/useFetch/useFetch";

type MenuItem = {
    id: string;
    meal: string;
    price: number;
    instructions: string;
    img: string;
    category: string;
};


type MainProps = {
    onAddToCart: (item: CartProduct) => void;
    totalQuantity?: number;
};



const visible_items_count = 6;

const Main :React.FC<MainProps> = ({ onAddToCart }) => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(visible_items_count);
    const[selectedCategory, setSelectedCategory] = useState("Dessert");


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
                if(!response.ok) {
                    throw new Error(`Failed to fetch data.Status:${response.status}`);
                }
                const result : MenuItem[] = await response.json();
                setMenuItems(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchItems();
    }, []);

    useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + visible_items_count);
    };
    const handleCategoryClick = (category:string) => {
        setSelectedCategory(category);
        setVisibleCount(visible_items_count);
    };


    const filteredItems = menuItems.filter(item => item.category === selectedCategory);
    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMoreItems = visibleCount < filteredItems.length;
    const categories = [...new Set(menuItems.map(item => item.category))];



    return (
        <main className="main">
            <div className="main__title">Browse our menu</div>
            <div className="main__subtitle common_font">
                Use our menu to place an order online, or{" "}
                <Tooltip text="Call us: +37067683921">
                    <span className="highlight">phone</span>
                </Tooltip>{" "}
                our store <br /> to place a pickup order. Fast and fresh food.
            </div>

            <Menu categories = {categories} onCategoryClick={handleCategoryClick}  selectedCategory={selectedCategory} />

            <div className="main_menu">
                {visibleItems.map((el) => (
                    <ProductCard
                        key={el.id}
                        id={el.id}
                        meal={el.meal}
                        price={el.price}
                        instructions={el.instructions}
                        img={el.img}
                        onAdd={onAddToCart}
                    />
                ))}
            </div>

            {hasMoreItems && (
                <Button variant="btn__primary" onClick={handleSeeMore}>
                    See more
                </Button>
            )}
        </main>
    );
}

export default Main;