import React from "react";
import Menu from '../Menu/Menu.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import SeeMore from '../Button/Button.jsx';
import "./Main.css";
import Tooltip from "../Tooltip/Tooltip.jsx";
import mock from "../../mock.json";
import Button from "../Button/Button.jsx";

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
            {mock.map((el) => (
                <ProductCard
                    index={el.id}
                    title={el.meal}
                    price={el.price}
                    description={el.instructions}
                    image={el.img}
                />
            ) )}
        </div>

        <Button>See more</Button>
    </main>);
};

export default Main;