import React from 'react';
import "./Menu.css";
import Button from "../Button/Button";


type MenuProps = {
    categories: string[];
    onCategoryClick: (category: string) => void;
    selectedCategory: string;
}

const Menu: React.FC<MenuProps> = ({ categories, onCategoryClick, selectedCategory }) => {
    return (
        <div className="main_to_choose_container">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? "btn__primary" : "btn__secondary"}
                    onClick={() => onCategoryClick(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default Menu;