import React from 'react';
import "./Menu.css";
import Button from "../Button/Button.jsx";

const Menu = ({ onCategoryClick, selectedCategory }) => {
    const categories = ['Dessert', 'Dinner', 'Breakfast'];

    return (
        <div className="main_to_choose_container">
            {categories.map((category) => (
                <Button
                    key={category}
                    type={selectedCategory === category ? "btn__primary" : "btn__secondary"}
                    onClick={() => onCategoryClick(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default Menu;