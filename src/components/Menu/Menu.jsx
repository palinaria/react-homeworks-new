import React, { Component } from 'react';
import "./Menu.css";
import Button from "../Button/Button.jsx";

class Menu extends Component {
    render() {
        return (
            <div className="main_to_choose_container">
                <Button type="btn__secondary">Desert</Button>
                <Button type="btn__secondary">Dinner</Button>
                <Button type="btn__secondary">Breakfast</Button>
            </div>
        );
    }
}

export default Menu;
