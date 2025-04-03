import React from "react";
import Menu from '../Menu/Menu.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import SeeMore from '../SeeMore/SeeMore.jsx';
import "./Main.css";


const Main = () => {
    return (<main className="main">
            <div className="main__title">Browse our menu</div>
            <div className="main__subtitle common_font">
                Use our menu to place an order online, or{" "}
                <a className="highlight">phone</a> our store <br/> to place a pickup
                order. Fast and fresh food.
            </div>

            <Menu/>

            <div className="main_menu">
                <ProductCard
                    title="Burger Dreams"
                    price="9.20"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <ProductCard
                    title="Burger Dreams"
                    price="9.20"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <ProductCard
                    title="Burger Dreams"
                    price="9.20"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>

            <SeeMore/>
        </main>);
};

export default Main;