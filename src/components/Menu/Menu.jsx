import React from 'react';
import "./Menu.css";
import Button from "../Button/Button.jsx";

const Menu = () => {
    return(
        <div className="main_to_choose_container">
            <Button type="btn__secondary" >Desert</Button>
            <Button type="btn__secondary">Dinner</Button>
            <Button type="btn__secondary">Breakfast</Button>
        </div>
    );
};

export default Menu;