import React from "react";
import Menu from '../Menu/Menu.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import SeeMore from '../SeeMore/SeeMore.jsx';
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip.jsx";


const Main = () => {
    return (<main className="main">
        <div className="main__title">Browse our menu</div>
        <div className="main__subtitle common_font">
            Use our menu to place an order online, or {" "}
            <Tooltip text="Call us: +37067683921">
                <span className="highlight"> phone</span> </Tooltip> our store <br/> to place a pickup
            order. Fast and fresh food.
        </div>

        <Menu/>

        <div className="main_menu">
            {Array.from({length: 6}, (_, index) => (
                <ProductCard
                    index={index}
                    title="Burger Dreams"
                    price="9.20"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            ))}
        </div>

        <SeeMore/>
    </main>);
};

export default Main;