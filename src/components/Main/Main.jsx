import React, { useState,useEffect } from "react";
import Menu from '../Menu/Menu.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip.jsx";
import Button from "../Button/Button.jsx";
import useFetch from "../../Hooks/useFetch/useFetch.js";


const visible_items_count = 6;

const Main = ({ onAddToCart }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(visible_items_count);
    const[selectedCategory, setSelectedCategory] = useState("Dessert");


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
                if(!response.ok) {
                    throw new Error(`Failed to fetch data.Status:${response.status}`);
                }
                const result = await response.json();
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
    const handleCategoryClick = (category) => {
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
                        productId={el.id}
                        index={el.id}
                        title={el.meal}
                        price={el.price}
                        description={el.instructions}
                        image={el.img}
                        onAdd={onAddToCart}
                    />
                ))}
            </div>

            {hasMoreItems && (
                <Button type="btn__primary" onClick={handleSeeMore}>
                    See more
                </Button>
            )}
        </main>
    );
}

export default Main;