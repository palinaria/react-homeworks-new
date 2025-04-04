import React from 'react';
import "./Menu.css";

const Menu = () => {
    return(
        <div className="main_to_choose_container">
            <button className="btn">Desert</button>
            <button className="btn">Dinner</button>
            <button className="btn">Breakfast</button>
        </div>
    );
};

export default Menu;